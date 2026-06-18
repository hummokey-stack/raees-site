import sys

path = 'C:/Users/KEN MASTER/RAEES/raees-site/src/index.css'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove scroll-behavior: smooth;
content = content.replace("    scroll-behavior: smooth;\n", "")

# Add Lenis CSS right after tailwind imports
lenis_css = """
html.lenis, html.lenis body {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}
.lenis.lenis-stopped {
  overflow: hidden;
}
.lenis.lenis-smooth iframe {
  pointer-events: none;
}
"""

content = content.replace("@tailwind utilities;\n", "@tailwind utilities;\n" + lenis_css)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed Lenis CSS conflict!")
