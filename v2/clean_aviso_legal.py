import re

with open('aviso-legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Title
content = content.replace('<title>Aviso Legal y Política de Privacidad - Metálicas Martinca</title>', '<title>Aviso Legal - Metálicas Martinca</title>')
content = content.replace('<h1 class="blog-post-title-large">Aviso Legal y Política de Privacidad</h1>', '<h1 class="blog-post-title-large">Aviso Legal</h1>')

# 2. Update TOC (Remove item 3)
toc_pattern = re.compile(r'<li><a href="#privacidad">Política de privacidad</a></li>\s*')
content = toc_pattern.sub('', content)

# Update TOC numbering
content = content.replace('<li><a href="#derechos">Derechos del usuario</a></li>', '<li><a href="#derechos">Derechos del usuario</a></li>') # Actually, maybe just leave TOC as is but remove item 3, we should renumber the texts? No need if we just remove the item, it's an <ol> list so it will automatically renumber in HTML!

# 3. Remove Section 3
section3_pattern = re.compile(r'<!-- 3 -->.*?<!-- 4 -->', re.DOTALL)
content = section3_pattern.sub('<!-- 3 -->\n                    <!-- 4 -->', content)

# 4. We should probably adjust the heading tags ID or text? Let's just remove the text for 3 and then fix the H2 numbers.
# Oh, the H2 have hardcoded numbers like `<h2 id="derechos">4. Derechos del usuario</h2>`.
content = content.replace('<h2 id="derechos">4. Derechos del usuario</h2>', '<h2 id="derechos">3. Derechos del usuario</h2>')
content = content.replace('<h2 id="propiedad-intelectual">5. Propiedad intelectual</h2>', '<h2 id="propiedad-intelectual">4. Propiedad intelectual</h2>')
content = content.replace('<h2 id="responsabilidad">6. Limitación de responsabilidad</h2>', '<h2 id="responsabilidad">5. Limitación de responsabilidad</h2>')
content = content.replace('<h2 id="legislacion">7. Legislación aplicable y jurisdicción</h2>', '<h2 id="legislacion">6. Legislación aplicable y jurisdicción</h2>')

with open('aviso-legal.html', 'w', encoding='utf-8') as f:
    f.write(content)

