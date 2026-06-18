import sys
import re

path = 'C:/Users/KEN MASTER/RAEES/raees-site/src/App.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace <a href={WA_LINK} with <motion.a href={WA_LINK} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
# We only want to do this for buttons, i.e., those with className="btn-primary" or "btn-outline" or similar.
# Let's find all instances of `<a href={WA_LINK}` and replace if they have className="btn
def replacer(match):
    full_match = match.group(0)
    if 'className="btn' in full_match:
        return full_match.replace('<a ', '<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} ').replace('</a>', '</motion.a>')
    return full_match

# Find a tags containing WA_LINK
content = re.sub(r'<a[^>]*href=\{WA_LINK\}[^>]*>.*?</a>', replacer, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated App.jsx with Framer Motion buttons!")
