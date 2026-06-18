import sys
import re

path = 'C:/Users/KEN MASTER/RAEES/raees-site/src/App.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the emojis with FA icon JSX elements
content = content.replace(
    "icon: '📚'",
    "icon: <i className='fa fa-book' style={{ color: '#6E5440' }}></i>"
)
content = content.replace(
    "icon: '💼'",
    "icon: <i className='fa fa-briefcase' style={{ color: '#6E5440' }}></i>"
)
content = content.replace(
    "icon: '🌍'",
    "icon: <i className='fa fa-globe' style={{ color: '#6E5440' }}></i>"
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated pillars array with FontAwesome JSX')
