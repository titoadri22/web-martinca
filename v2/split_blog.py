import re
import os
import math

BASE_DIR = "/Users/adrianrevert/Documents/Webs/martinca/v2"
BLOG_FILE = os.path.join(BASE_DIR, "blog.html")

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Match everything before the grid, the grid content, and everything after
match = re.search(r'(<div class="blog-grid">)(.*?)(</div>\s*</div>\s*</section>)', content, re.DOTALL)
if not match:
    print("Could not find blog grid")
    exit(1)

pre_grid = content[:match.start(2)]
grid_content = match.group(2)
post_grid = content[match.end(2):]

# Extract individual cards
# A card starts with <div class="blog-card fade-in"> and ends with the next card or end of string.
cards = []
parts = grid_content.split('<div class="blog-card fade-in">')
for p in parts[1:]:
    card = '<div class="blog-card fade-in">' + p
    # remove trailing comments or newlines that are just separators
    # Actually wait, splitting string might include the <!-- Page X --> comments.
    card = re.sub(r'<!--.*?-->', '', card, flags=re.DOTALL)
    card = card.strip()
    cards.append(card)

print(f"Total cards found: {len(cards)}")

cards_per_page = 6
total_pages = math.ceil(len(cards) / cards_per_page)

def get_page_filename(page):
    if page == 1:
        return "blog.html"
    return f"blog-page-{page}.html"

def build_pagination(current_page, total_pages):
    html = ['<div class="pagination" style="display:flex; justify-content:center; gap:10px; margin-top:50px; margin-bottom: 20px;">']
    
    # Prev button
    if current_page > 1:
        html.append(f'<a href="{get_page_filename(current_page - 1)}" class="page-link" style="padding:10px 15px; border:1px solid #ddd; text-decoration:none; color:#333;">&laquo;</a>')
    
    for p in range(1, total_pages + 1):
        if p == current_page:
            html.append(f'<span class="page-link active" style="padding:10px 15px; background:#C9A962; color:#fff; font-weight:bold;">{p}</span>')
        else:
            html.append(f'<a href="{get_page_filename(p)}" class="page-link" style="padding:10px 15px; border:1px solid #ddd; text-decoration:none; color:#333;">{p}</a>')
            
    # Next button
    if current_page < total_pages:
        html.append(f'<a href="{get_page_filename(current_page + 1)}" class="page-link" style="padding:10px 15px; border:1px solid #ddd; text-decoration:none; color:#333;">&raquo;</a>')
        
    html.append('</div>')
    return "\\n".join(html)

for page in range(1, total_pages + 1):
    start_idx = (page - 1) * cards_per_page
    end_idx = start_idx + cards_per_page
    page_cards = cards[start_idx:end_idx]
    
    # Join cards with newlines
    new_grid_content = "\\n".join(page_cards) + "\\n"
    
    # Add pagination right after the grid and its container
    pagination_html = build_pagination(page, total_pages)
    
    # Replace the post_grid part to inject the pagination before the </section>
    # Find where the container ends
    new_post_grid = re.sub(r'(</div>\s*</section>)', f'{pagination_html}\\n\\\\1', post_grid)
    
    new_content = pre_grid + new_grid_content + new_post_grid
    
    filename = os.path.join(BASE_DIR, get_page_filename(page))
    with open(filename, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Generated {filename}")

