with open('/Users/adrianrevert/Documents/Webs/martinca/v2/galeria.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
in_bad_block = False
for line in lines:
    if '<div class="galeria-item ' in line and 'data-category="barandillas"' in line:
        if 'doskxzei4' not in line:  # The url is on the NEXT line usually. 
            # So looking at the first line doesn't tell us if it's new
            pass
            
    if in_bad_block:
        if '</div>' in line:
            # Maybe the end of the block?
            pass

