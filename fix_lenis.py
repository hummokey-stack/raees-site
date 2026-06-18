import sys

path = 'C:/Users/KEN MASTER/RAEES/raees-site/src/App.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

bad_code = """    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }"""

good_code = """    function raf(time) {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(raf)
    }"""

content = content.replace(bad_code, good_code)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed Lenis GSAP ticker!")
