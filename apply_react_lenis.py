import sys

path = 'C:/Users/KEN MASTER/RAEES/raees-site/src/App.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the Lenis import
content = content.replace("import Lenis from '@studio-freight/lenis'", "import { ReactLenis } from '@studio-freight/react-lenis'")

# Remove the vanilla useEffect lenis setup
old_setup = """  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    function raf(time) {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(raf)
    }
  }, [])"""

content = content.replace(old_setup, "")

# Wrap the app in <ReactLenis root>
old_return = """  return (
    <div style={{ minHeight: '100vh', background: '#0D0D12' }}>"""

new_return = """  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div style={{ minHeight: '100vh', background: '#0D0D12' }}>"""

content = content.replace(old_return, new_return)

content = content.replace(
"""      <Footer />
    </div>
  )
}""",
"""      <Footer />
      </div>
    </ReactLenis>
  )
}"""
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced with ReactLenis!")
