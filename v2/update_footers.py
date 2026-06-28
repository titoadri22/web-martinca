import os
import glob

html_files = glob.glob('**/*.html', recursive=True)

footer_bottom_html = """        <div class="footer-bottom">
            <div class="container" style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                <div class="footer-legal-links" style="display: flex; gap: 20px; font-size: 0.85rem;">
                    <a href="aviso-legal.html" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.3s ease;">Aviso Legal</a>
                    <span style="color: rgba(255, 255, 255, 0.3);">|</span>
                    <a href="politica-privacidad.html" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.3s ease;">Política de Privacidad</a>
                    <span style="color: rgba(255, 255, 255, 0.3);">|</span>
                    <a href="politica-cookies.html" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: color 0.3s ease;">Política de Cookies</a>
                </div>
                <p data-i18n="footer.copy">&copy; 2026 Metálicas Martinca. Todos los derechos reservados.</p>
            </div>
        </div>"""

for filepath in html_files:
    if 'politica-privacidad.html' in filepath: # Already has it
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to replace the current <div class="footer-bottom">...</div> with our new one
    # Current structure is usually:
    #         <div class="footer-bottom">
    #             <div class="container">
    #                 <p data-i18n="footer.copy">&copy; 2026 Metálicas Martinca. Todos los derechos reservados.</p>
    #             </div>
    #         </div>
    
    import re
    
    # regex to find footer-bottom
    pattern = re.compile(r'<div class="footer-bottom">.*?</div>\s*</div>', re.DOTALL)
    
    new_content = pattern.sub(footer_bottom_html, content)
    
    # In case there's missing data-i18n in some files
    if '<div class="footer-bottom">' in new_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"Skipped {filepath} (could not find footer-bottom)")

