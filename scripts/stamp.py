import os, re
with open('/root/pendlepods_work/partials/header.html', 'r', encoding='utf-8') as f:
    nav_html = f.read()
with open('/root/pendlepods_work/partials/footer.html', 'r', encoding='utf-8') as f:
    footer_html = f.read()

for filename in os.listdir('/root/pendlepods_work'):
    if filename.endswith('.html'):
        path = os.path.join('/root/pendlepods_work', filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Clean current
        content = re.sub(r'<!-- Navigation -->\s*<nav.*?</nav>', '', content, re.S)
        content = re.sub(r'<!-- Footer -->\s*<footer.*?</footer>', '', content, re.S)
        
        # Inject
        content = re.sub(r'(<body.*?>)', r'\1\n' + nav_html, content, re.S)
        content = content.replace('</body>', '\n' + footer_html + '\n</body>')
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Stamped {filename}')
