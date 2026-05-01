#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')
"""
Script para limpiar los blogs de Martinca:
- Elimina la sección de 'Relacionados' (related-posts)
- Elimina el formulario de comentarios/cuestionario (comments-area)
- Elimina el entry-footer con botones de compartir en redes sociales
- Limpia el HTML anidado sobrante del Wordpress original
- Verifica que todos los blogs tienen imágenes
"""

import os
import re
import glob

BLOG_DIR = r"c:\Users\pc\Documents\martinca\v2\blog"

def clean_blog(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # 1. Eliminar sección de blogs relacionados: <div class="related-posts">...</div>
    # Usamos una función que cuenta niveles de anidamiento para encontrar el cierre correcto
    content = remove_block(content, '<div class="related-posts">')

    # 2. Eliminar formulario de comentarios: <div id="comments" class="comments-area">...</div>
    content = remove_block(content, '<div id="comments" class="comments-area">')

    # 3. Eliminar entry-footer con botones de compartir (solo el que tiene share-post)
    # Este bloque: <div class="entry-footer clearfix"><div class="share-post">...</div></div>
    content = re.sub(
        r'<div class="entry-footer clearfix">.*?</div>\s*</div>\s*(?=\s*</div>|\s*<div class="post-nav)',
        '',
        content,
        flags=re.DOTALL
    )

    # 4. Eliminar la navegación tipo WordPress (post-nav con enlaces a martinca.es)
    content = remove_block(content, '<div class="post-nav clearfix">')

    # 5. Limpiar el HTML anidado extra de Wordpress que envuelve el contenido
    # Patrón: hay un <div class="container"> anidado dentro del entry-summary que no debería estar
    # junto con <div class="row">, <div id="primary"...>, <main id="main"...>
    content = re.sub(r'\s*<div class="container">\s*<div class="row">\s*<div id="primary"[^>]*>\s*<main id="main"[^>]*>\s*\n?\s*\n?\s*\n?', '', content, flags=re.DOTALL)
    content = re.sub(r'\s*</main><!-- #main -->\s*</div><!-- #primary -->\s*\n?\s*\n?\s*</div>\s*</div>\s*\n?\s*\n?\s*</div>', '', content, flags=re.DOTALL)

    # 6. Eliminar el <article id="post-..."> anidado dentro de entry-summary (sobrante de Wordpress)
    # Estos artículos tienen clase como "post-box post-XXXX post type-post..."
    # Los eliminamos dejando solo su contenido de entry-summary interior
    content = re.sub(
        r'<article id="post-\d+"[^>]*>\s*\n?\s*\n?',
        '',
        content,
        flags=re.DOTALL
    )
    # Cerrar el article sobrante de Wordpress
    content = re.sub(
        r'</article>\s*\n?(\s*<div class="post-nav|\s*</div><!-- #comments|\s*</main>)',
        r'\1',
        content,
        flags=re.DOTALL
    )

    # 7. Limpiar inner-post y entry-summary duplicados
    # Si hay doble <div class="inner-post"> + <div class="entry-summary"> anidados, dejamos solo uno
    content = re.sub(
        r'(<div class="inner-post">\s*\n?\s*<div class="entry-summary">)\s*\n?\s*(?:<div class="inner-post">\s*\n?\s*<div class="entry-summary">)',
        r'\1',
        content,
        flags=re.DOTALL
    )
    content = re.sub(
        r'</div><!-- \.entry-content -->\s*\n?\s*</div>\s*\n?(\s*</div><!-- #comments|\s*</div><!-- \.entry-footer|\s*</article>|\s*</div>\s*\n?\s*</article>)',
        r'\1',
        content,
        flags=re.DOTALL
    )

    # 8. Limpiar líneas en blanco excesivas (más de 2 consecutivas)
    content = re.sub(r'\n{3,}', '\n\n', content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True, "Modificado"
    return False, "Sin cambios"


def remove_block(content, start_tag):
    """Elimina un bloque HTML completo que comienza con start_tag, manejando anidamiento."""
    idx = content.find(start_tag)
    if idx == -1:
        return content

    # Encontrar el cierre del bloque contando <div> y </div>
    tag_name = start_tag.split('<')[1].split(' ')[0].split('>')[0]  # 'div'
    depth = 0
    i = idx
    while i < len(content):
        if content[i] == '<':
            # Verificar si es apertura o cierre
            if content[i:i+2] == '</':
                # Cierre de tag
                end = content.find('>', i)
                if end == -1:
                    break
                tag = content[i+2:end].strip().split()[0].rstrip('/')
                if tag == tag_name:
                    depth -= 1
                    if depth == 0:
                        # Encontramos el cierre del bloque
                        end_pos = end + 1
                        # Eliminar también espacios/saltos antes
                        removed = content[:idx].rstrip() + content[end_pos:]
                        return removed
                i = end + 1
            else:
                # Apertura de tag
                end = content.find('>', i)
                if end == -1:
                    break
                tag_part = content[i+1:end]
                tag = tag_part.strip().split()[0].rstrip('/')
                if tag == tag_name:
                    if not content[end-1] == '/':  # no es self-closing
                        depth += 1
                i = end + 1
        else:
            i += 1

    return content


def check_images(filepath):
    """Verifica si el blog tiene imágenes."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    imgs = re.findall(r'<img[^>]+>', content)
    # Excluir logo images
    content_imgs = [img for img in imgs if 'logo' not in img.lower()]
    return len(content_imgs)


def main():
    blog_files = sorted(glob.glob(os.path.join(BLOG_DIR, "*.html")))
    print(f"Procesando {len(blog_files)} archivos de blog...\n")

    modified = []
    no_images = []

    for filepath in blog_files:
        filename = os.path.basename(filepath)
        changed, status = clean_blog(filepath)
        img_count = check_images(filepath)

        if img_count == 0:
            no_images.append(filename)

        icon = "OK" if changed else "-"
        img_info = f"[{img_count} foto(s)]" if img_count > 0 else "[SIN FOTOS!]"
        print(f"  {icon} {filename} {img_info}")

        if changed:
            modified.append(filename)

    print(f"\n{'='*60}")
    print(f"RESUMEN:")
    print(f"  Total blogs:     {len(blog_files)}")
    print(f"  Modificados:     {len(modified)}")
    print(f"  Sin cambios:     {len(blog_files) - len(modified)}")

    if no_images:
        print(f"\nBLOGS SIN FOTOS ({len(no_images)}):")
        for f in no_images:
            print(f"    - {f}")
    else:
        print("\nTodos los blogs tienen fotos. OK")


if __name__ == "__main__":
    main()
