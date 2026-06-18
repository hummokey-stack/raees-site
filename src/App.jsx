import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Phone, MessageCircle, Facebook, ChevronDown, Star, Shield, Users, TrendingUp, Check, Menu, X } from 'lucide-react'
import { ReactLenis } from '@studio-freight/react-lenis'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import './index.css'

gsap.registerPlugin(ScrollTrigger)

// ─── CONSTANTS ──────────────────────────────────────────────────────────────
const WA_LINK = 'https://wa.me/237653921642'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=60&fm=webp&auto=format'
const PHILOSOPHY_IMAGE = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=60&fm=webp&auto=format'

const TYPEWRITER_MESSAGES = [
  'Ousmanou Ibrahim — Président National',
  'Réunion bimensuelle — chaque dimanche 14h',
  'Fraternité entre étudiants du Septentrion ↗',
  'Renforcement des liens Nord-Sud — actif',
  'Protection de l\'environnement — en cours',
  'Soa, Cameroun · Depuis 2018 · Unité & Succès',
]

const EDUCATION_ITEMS = [
  { label: 'Promotion scolaire', badge: '↑ 100%' },
  { label: 'Soutien académique', badge: '↑ Actif' },
  { label: 'Bourses & opportunités', badge: '→ En cours' },
]

const WEEK_DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
const ACTIVE_DAYS = [0, 3, 6] // Lundi, Jeudi, Dimanche

// ─── NAVBAR ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    const hero = document.getElementById('hero')
    if (hero) observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const links = [
    { label: 'Missions', href: '#features' },
    { label: 'Éducation', href: '#education' },
    { label: 'À propos', href: '#philosophie' },
    { label: 'Adhérer', href: '#adhesion' },
  ]

  return (
    <>
      <nav ref={navRef} className={`nav-pill ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem', shrink: 0 }}>
          <img
            src="/logo.png"
            alt="R.A.E.E.S. Logo"
            style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid rgba(217,168,79,0.4)' }}
          />
          <span className="font-inter font-bold text-sm tracking-tight hidden sm:block" style={{ color: '#D9A84F' }}>R.A.E.E.S.</span>
        </a>

        {/* Links — desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-inter font-medium text-sm transition-all duration-200"
              style={{
                color: scrolled ? 'rgba(245,240,232,0.8)' : 'rgba(245,240,232,0.9)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { e.target.style.transform = 'translateY(-1px)'; e.target.style.color = '#D9A84F' }}
              onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.color = scrolled ? 'rgba(245,240,232,0.8)' : 'rgba(245,240,232,0.9)' }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-4 py-2 shrink-0" style={{ padding: '0.55rem 1.25rem', fontSize: '0.8rem' }}>
          Rejoindre
        </motion.a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ivoire"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: '#F5F0E8', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center gap-8"
          style={{ background: 'rgba(13,13,18,0.97)', backdropFilter: 'blur(20px)' }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', cursor: 'pointer', color: '#F5F0E8' }}
          >
            <X size={24} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/logo.png" alt="R.A.E.E.S. Logo" fetchPriority="high" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(217,168,79,0.4)' }} />
            <span className="font-inter font-bold text-2xl" style={{ color: '#D9A84F' }}>R.A.E.E.S.</span>
          </div>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="font-inter font-medium text-xl"
              style={{ color: '#F5F0E8', textDecoration: 'none' }}
            >
              {l.label}
            </a>
          ))}
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">
            Rejoindre l'association
          </motion.a>
        </div>
      )}
    </>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const eyebrowRef = useRef(null)
  const title1Ref = useRef(null)
  const title2Ref = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      })

      // Stagger entrance
      const els = [eyebrowRef.current, title1Ref.current, title2Ref.current, subtitleRef.current, ctaRef.current, badgeRef.current]
      gsap.fromTo(els,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 1.1,
          ease: 'power3.out',
          delay: 0.3,
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={sectionRef} style={{ height: '100dvh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      {/* Background image */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-10%',
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />
      {/* Overlay */}
      <div className="hero-gradient" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '0 2rem 5rem', maxWidth: '860px' }}>
        {/* Eyebrow */}
        <div ref={eyebrowRef} className="hidden md:block" style={{ opacity: 0 }}>
          <span className="font-mono-jet" style={{
            color: '#D9A84F',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '1.5rem',
          }}>
            Septentrion · Cameroun · Fondé en 2018
          </span>
        </div>

        {/* Title line 1 */}
        <h1 ref={title1Ref} style={{ opacity: 0, margin: 0 }}>
          <span className="font-inter" style={{
            display: 'block',
            fontWeight: 800,
            fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
            color: '#F5F0E8',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}>
            Le Septentrion rencontre
          </span>
        </h1>

        {/* Title line 2 */}
        <div ref={title2Ref} style={{ opacity: 0 }}>
          <span className="font-playfair" style={{
            display: 'block',
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
            color: '#D9A84F',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            marginBottom: '1.5rem',
          }}>
            l'Excellence.
          </span>
        </div>

        {/* Subtitle */}
        <p ref={subtitleRef} style={{
          opacity: 0,
          color: 'rgba(245,240,232,0.65)',
          fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          lineHeight: 1.7,
          maxWidth: '520px',
          marginBottom: '2.5rem',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
        }}>
          Réseau apolitique à but non lucratif dédié à l'éducation, la fraternité et le développement des élèves et étudiants du Septentrion camerounais.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} style={{ opacity: 0, display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '3rem' }}>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle size={16} />
            Rejoindre l'association
          </motion.a>
          <a href="#features" className="btn-outline-light" style={{ padding: '0.875rem 1.75rem' }}>
            Découvrir nos missions
            <ChevronDown size={16} />
          </a>
        </div>

        {/* Badge */}
        <div ref={badgeRef} style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ position: 'relative', width: '8px', height: '8px' }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#4ade80', animation: 'pulse-ring 2s ease-out infinite' }} />
            <div style={{ position: 'relative', width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
          </div>
          <span className="font-mono-jet" style={{
            color: 'rgba(245,240,232,0.45)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            Association active · Depuis 2018 · Soa, Cameroun
          </span>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        right: '2rem',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        opacity: 0.4,
      }}>
        <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, transparent, #D9A84F)', animation: 'pulse 2s ease infinite' }} />
      </div>
    </section>
  )
}

// ─── EDUCATION CARD ──────────────────────────────────────────────────────────
function EducationCard() {
  const [items, setItems] = useState([...EDUCATION_ITEMS])

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="card-dark" style={{ padding: '2rem', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(217,168,79,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Star size={14} color="#D9A84F" />
          </div>
          <span className="font-mono-jet" style={{ color: '#D9A84F', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Éducation</span>
        </div>
        <h3 className="font-inter" style={{ color: '#F5F0E8', fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.3 }}>
          Promotion scolaire & académique
        </h3>
      </div>

      {/* Stacked items */}
      <div style={{ position: 'relative', height: '130px' }}>
        {items.map((item, i) => (
          <div
            key={item.label}
            style={{
              position: 'absolute',
              width: '100%',
              top: `${[0, 52, 96][i]}px`,
              opacity: [1, 0.6, 0.3][i],
              transform: `scale(${[1, 0.97, 0.94][i]})`,
              transformOrigin: 'left center',
              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
              background: i === 0 ? 'rgba(217,168,79,0.08)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${i === 0 ? 'rgba(217,168,79,0.2)' : 'rgba(255,255,255,0.06)'}`,
              borderRadius: '0.75rem',
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span className="font-inter" style={{ color: i === 0 ? '#F5F0E8' : 'rgba(245,240,232,0.5)', fontSize: '0.875rem', fontWeight: 500 }}>
              {item.label}
            </span>
            <span className="font-mono-jet" style={{
              color: '#D9A84F',
              fontSize: '0.7rem',
              background: 'rgba(217,168,79,0.12)',
              border: '1px solid rgba(217,168,79,0.2)',
              borderRadius: '100px',
              padding: '0.2rem 0.6rem',
            }}>
              {item.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── TYPEWRITER CARD ─────────────────────────────────────────────────────────
function TypewriterCard() {
  const [displayText, setDisplayText] = useState('')
  const [msgIndex, setMsgIndex] = useState(0)
  const [phase, setPhase] = useState('typing') // 'typing' | 'pause' | 'erasing'
  const charRef = useRef(0)

  useEffect(() => {
    const msg = TYPEWRITER_MESSAGES[msgIndex]
    let timeout

    if (phase === 'typing') {
      if (charRef.current < msg.length) {
        timeout = setTimeout(() => {
          setDisplayText(msg.slice(0, charRef.current + 1))
          charRef.current++
        }, 45)
      } else {
        timeout = setTimeout(() => setPhase('pause'), 2000)
      }
    } else if (phase === 'pause') {
      setPhase('erasing')
    } else if (phase === 'erasing') {
      if (charRef.current > 0) {
        timeout = setTimeout(() => {
          charRef.current--
          setDisplayText(msg.slice(0, charRef.current))
        }, 22)
      } else {
        setMsgIndex(prev => (prev + 1) % TYPEWRITER_MESSAGES.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, phase, msgIndex])

  return (
    <div className="card-dark" style={{ padding: '2rem', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(217,168,79,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Users size={14} color="#D9A84F" />
          </div>
          <span className="font-mono-jet" style={{ color: '#D9A84F', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Fraternité</span>
        </div>
        <h3 className="font-inter" style={{ color: '#F5F0E8', fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.3 }}>
          Réseau de solidarité vivant
        </h3>
      </div>

      {/* Live indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <div style={{ position: 'relative', width: '8px', height: '8px' }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#D9A84F', animation: 'pulse-ring 2s ease-out infinite' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D9A84F', position: 'relative' }} />
        </div>
        <span className="font-mono-jet" style={{ color: 'rgba(217,168,79,0.7)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Flux en direct
        </span>
      </div>

      {/* Typewriter box */}
      <div style={{
        background: 'rgba(0,0,0,0.5)',
        border: '1px solid rgba(217,168,79,0.12)',
        borderRadius: '0.75rem',
        padding: '1rem 1.25rem',
        minHeight: '4.5rem',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
      }}>
        <span className="font-mono-jet" style={{ color: '#F5F0E8', fontSize: '0.82rem', lineHeight: 1.6 }}>
          {displayText}
          <span className="cursor-blink" style={{ color: '#D9A84F', marginLeft: '1px' }}>|</span>
        </span>
      </div>

      {/* Info */}
      <p className="font-inter" style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.78rem', marginTop: '1rem', lineHeight: 1.5 }}>
        Réunions bimensuelles · Chaque dimanche · 14h–16h
      </p>
    </div>
  )
}

// ─── PROTOCOL CARD ───────────────────────────────────────────────────────────
function ProtocolCard() {
  const [activeDay, setActiveDay] = useState(null)
  const [showConfirm, setShowConfirm] = useState(false)
  const stepRef = useRef(0)

  useEffect(() => {
    let timeout

    const runSequence = () => {
      setActiveDay(null)
      setShowConfirm(false)
      stepRef.current = 0

      const advance = () => {
        if (stepRef.current < ACTIVE_DAYS.length) {
          setActiveDay(ACTIVE_DAYS[stepRef.current])
          stepRef.current++
          timeout = setTimeout(advance, 700)
        } else {
          timeout = setTimeout(() => {
            setShowConfirm(true)
            timeout = setTimeout(() => {
              timeout = setTimeout(runSequence, 800)
            }, 1500)
          }, 300)
        }
      }

      timeout = setTimeout(advance, 500)
    }

    runSequence()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="card-dark" style={{ padding: '2rem', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(217,168,79,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TrendingUp size={14} color="#D9A84F" />
          </div>
          <span className="font-mono-jet" style={{ color: '#D9A84F', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Développement</span>
        </div>
        <h3 className="font-inter" style={{ color: '#F5F0E8', fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.3 }}>
          Croissance socio-culturelle & professionnelle
        </h3>
      </div>

      {/* Week grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.35rem', marginBottom: '1.25rem' }}>
        {WEEK_DAYS.map((day, i) => {
          const isActive = activeDay !== null && ACTIVE_DAYS.slice(0, ACTIVE_DAYS.indexOf(activeDay) + 1).includes(i)
          const isCurrent = activeDay === i
          return (
            <div
              key={day}
              style={{
                textAlign: 'center',
                padding: '0.5rem 0.25rem',
                borderRadius: '0.5rem',
                border: `1px solid ${isCurrent ? 'rgba(217,168,79,0.5)' : isActive ? 'rgba(217,168,79,0.25)' : 'rgba(255,255,255,0.06)'}`,
                background: isCurrent ? 'rgba(217,168,79,0.15)' : isActive ? 'rgba(217,168,79,0.07)' : 'rgba(255,255,255,0.02)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              <span className="font-mono-jet" style={{
                fontSize: '0.65rem',
                color: isCurrent ? '#D9A84F' : isActive ? 'rgba(217,168,79,0.7)' : 'rgba(245,240,232,0.3)',
                fontWeight: isCurrent ? 600 : 400,
                transition: 'color 0.4s ease',
              }}>
                {day}
              </span>
            </div>
          )
        })}
      </div>

      {/* Confirm button */}
      <div style={{
        padding: '0.75rem 1rem',
        borderRadius: '0.75rem',
        border: `1px solid ${showConfirm ? 'rgba(217,168,79,0.35)' : 'rgba(255,255,255,0.06)'}`,
        background: showConfirm ? 'rgba(217,168,79,0.1)' : 'rgba(255,255,255,0.02)',
        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <span style={{
          color: showConfirm ? '#D9A84F' : 'rgba(245,240,232,0.25)',
          fontSize: '0.8rem',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          transition: 'color 0.5s ease',
        }}>
          {showConfirm ? '✓ Réunion planifiée — 14h–16h' : '— En attente de planification…'}
        </span>
      </div>
    </div>
  )
}

// ─── FEATURES ────────────────────────────────────────────────────────────────
function Features() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%' }
        }
      )
      gsap.fromTo(gridRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 75%' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="features" ref={sectionRef} style={{ background: '#FAF8F5', padding: '8rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="font-mono-jet" style={{ color: '#6E5440', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            Nos engagements
          </span>
          <h2 className="font-playfair" style={{
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: '#0D0D12',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
          }}>
            Trois engagements, un seul réseau.
          </h2>
        </div>

        {/* Grid */}
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          <EducationCard />
          <TypewriterCard />
          <ProtocolCard />
        </div>
      </div>
    </section>
  )
}

// ─── EDUCATION SHOWCASE ──────────────────────────────────────────────────────
function EducationShowcase() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      )
      gsap.fromTo(textRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const stats = [
    { value: <CountUp end={100} suffix="%" enableScrollSpy scrollSpyOnce />, label: 'Engagement éducatif' },
    { value: '2018', label: 'Année de fondation' },
    { value: '+50', label: 'Membres actifs' },
  ]

  return (
    <section id="education" ref={sectionRef} style={{ background: '#0D0D12', padding: '7rem 2rem', overflow: 'hidden' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
      }}>

        {/* IMAGE — complète, sans crop */}
        <div ref={imageRef} style={{ opacity: 0, position: 'relative' }}>
          {/* Cadre décoratif champagne */}
          <div style={{
            position: 'absolute',
            top: '-16px',
            left: '-16px',
            right: '16px',
            bottom: '16px',
            border: '1px solid rgba(217,168,79,0.25)',
            borderRadius: '2rem',
            zIndex: 0,
            pointerEvents: 'none',
          }} />
          {/* Badge flottant */}
          <div style={{
            position: 'absolute',
            top: '1.5rem',
            right: '-1rem',
            zIndex: 3,
            background: '#D9A84F',
            color: '#0D0D12',
            borderRadius: '100px',
            padding: '0.5rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            boxShadow: '0 8px 24px rgba(217,168,79,0.35)',
          }}>
            <span style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Membres officiels
            </span>
          </div>
          {/* Image complète */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            borderRadius: '2rem',
            overflow: 'hidden',
            border: '1px solid rgba(217,168,79,0.15)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(217,168,79,0.1)',
          }}>
            <img
              src="/hero-students.png"
              alt="Membres R.A.E.E.S. en tenue officielle — Unité, Équité, Succès"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />
            {/* Légende image */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(13,13,18,0.95) 0%, transparent 100%)',
              padding: '2rem 1.5rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <img src="/logo.png" alt="Logo R.A.E.E.S." style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid rgba(217,168,79,0.4)' }} />
              <div>
                <p style={{ color: '#D9A84F', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
                  R.A.E.E.S.
                </p>
                <p style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', margin: 0 }}>
                  Unité — Équité — Succès
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div ref={textRef}>
          {/* Eyebrow */}
          <div style={{ opacity: 0 }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#D9A84F',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1.25rem',
            }}>
              Pourquoi l'éducation ?
            </span>
          </div>

          {/* Title */}
          <div style={{ opacity: 0 }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: '#F5F0E8',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              marginBottom: '1.5rem',
            }}>
              L'éducation,<br />
              <span style={{ color: '#D9A84F' }}>notre priorité absolue.</span>
            </h2>
          </div>

          {/* Body */}
          <div style={{ opacity: 0 }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(245,240,232,0.65)',
              fontSize: '1rem',
              lineHeight: 1.8,
              marginBottom: '1.25rem',
            }}>
              Au Septentrion, chaque élève et étudiant mérite un accompagnement digne de son potentiel. R.A.E.E.S. croit fermement que l'éducation est le levier le plus puissant pour transformer une communauté.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(245,240,232,0.65)',
              fontSize: '1rem',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}>
              C'est pourquoi nous agissons concrètement : soutien académique, mise en réseau avec des bourses, promotion de l'excellence scolaire — parce qu'un étudiant accompagné aujourd'hui, c'est un leader du Septentrion demain.
            </p>
          </div>

          {/* Quote */}
          <div style={{ opacity: 0 }}>
            <blockquote style={{
              borderLeft: '3px solid #D9A84F',
              paddingLeft: '1.25rem',
              marginBottom: '2.5rem',
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              color: 'rgba(245,240,232,0.8)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
            }}>
              "Un peuple qui éduque sa jeunesse prépare son avenir avec certitude."
            </blockquote>
          </div>

          {/* Stats */}
          <div style={{ opacity: 0 }}>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              {stats.map(s => (
                <div key={s.label} style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#D9A84F', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(245,240,232,0.4)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.35rem' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ opacity: 0 }}>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={16} />
              Rejoindre le mouvement
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FEMME SCOLARISÉE ────────────────────────────────────────────────────────
function FemmeScolarisee() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      )
      gsap.fromTo(textRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const pillars = [
    { icon: <i className='fa fa-book' style={{ color: '#6E5440' }}></i>, label: 'Accès au savoir', desc: 'Une femme instruite transmet le savoir à toute sa famille.' },
    { icon: <i className='fa fa-briefcase' style={{ color: '#6E5440' }}></i>, label: 'Autonomie économique', desc: 'L\'éducation ouvre des portes vers l\'indépendance financière.' },
    { icon: <i className='fa fa-globe' style={{ color: '#6E5440' }}></i>, label: 'Impact communautaire', desc: 'Une mère éduquée, c\'est une génération transformée.' },
  ]

  return (
    <section id="femme-scolarisee" ref={sectionRef} style={{ background: '#FAF8F5', padding: '8rem 2rem', overflow: 'hidden' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
      }}>

        {/* TEXT — à gauche */}
        <div ref={textRef}>
          {/* Eyebrow */}
          <div style={{ opacity: 0 }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#6E5440',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1.25rem',
            }}>
              Égalité & Excellence
            </span>
          </div>

          {/* Title */}
          <div style={{ opacity: 0 }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: '#0D0D12',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              marginBottom: '1.5rem',
            }}>
              Une femme scolarisée,<br />
              <span style={{ color: '#6E5440' }}>une nation éclairée.</span>
            </h2>
          </div>

          {/* Body */}
          <div style={{ opacity: 0 }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(13,13,18,0.65)',
              fontSize: '1rem',
              lineHeight: 1.8,
              marginBottom: '1.25rem',
            }}>
              R.A.E.E.S. place la scolarisation des jeunes filles et femmes du Septentrion au cœur de ses priorités. Nous croyons que l'égalité dans l'accès à l'éducation n'est pas une option — c'est une nécessité pour le développement de toute notre région.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(13,13,18,0.65)',
              fontSize: '1rem',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}>
              Chaque jeune fille qui reste sur les bancs de l'école est une future médecin, ingénieure, enseignante ou dirigeante. Notre réseau les soutient, les encourage et leur ouvre des portes vers des opportunités concrètes.
            </p>
          </div>

          {/* Quote */}
          <div style={{ opacity: 0 }}>
            <blockquote style={{
              borderLeft: '3px solid #6E5440',
              paddingLeft: '1.25rem',
              marginBottom: '2.5rem',
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              color: 'rgba(13,13,18,0.75)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
            }}>
              "Éduquer une femme, c'est éduquer toute une nation."<br />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#6E5440', letterSpacing: '0.05em', fontStyle: 'normal' }}>
                — Proverbe africain
              </span>
            </blockquote>
          </div>

          {/* Pillars */}
          <div style={{ opacity: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {pillars.map(p => (
                <div key={p.label} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  background: 'rgba(110,84,64,0.06)',
                  border: '1px solid rgba(110,84,64,0.12)',
                  borderRadius: '1rem',
                  padding: '1rem 1.25rem',
                }}>
                  <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{p.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#0D0D12', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                      {p.label}
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(13,13,18,0.55)', fontSize: '0.82rem', lineHeight: 1.6 }}>
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ opacity: 0 }}>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'inline-flex' }}>
              <MessageCircle size={16} />
              Nous soutenir
            </motion.a>
          </div>
        </div>

        {/* IMAGE — à droite, complète */}
        <div ref={imageRef} style={{ opacity: 0, position: 'relative' }}>
          {/* Cadre décoratif brun */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            right: '-16px',
            bottom: '-16px',
            border: '1px solid rgba(110,84,64,0.2)',
            borderRadius: '2rem',
            zIndex: 0,
            pointerEvents: 'none',
          }} />
          {/* Badge flottant */}
          <div style={{
            position: 'absolute',
            top: '1.5rem',
            left: '-1rem',
            zIndex: 3,
            background: '#6E5440',
            color: '#FBF9F6',
            borderRadius: '100px',
            padding: '0.5rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            boxShadow: '0 8px 24px rgba(110,84,64,0.35)',
          }}>
            <span style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              ✦ Scolarisation féminine
            </span>
          </div>
          {/* Image complète */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            borderRadius: '2rem',
            overflow: 'hidden',
            border: '1px solid rgba(110,84,64,0.15)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(110,84,64,0.1)',
            background: '#f0ece6',
          }}>
            <img
              src="/femme-scolarisee.jpg"
              alt="Étudiante africaine avec des livres — R.A.E.E.S. soutien à la scolarisation féminine"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />
            {/* Stat overlay bottom */}
            <div style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '1.25rem',
              background: 'rgba(251,249,246,0.95)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(110,84,64,0.15)',
              borderRadius: '1rem',
              padding: '0.75rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.2rem',
            }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#6E5440', lineHeight: 1 }}>
                <CountUp end={50} suffix="%" enableScrollSpy scrollSpyOnce />
              </span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: 'rgba(13,13,18,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                De notre réseau sont des femmes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── JEUNESSE & SOCIÉTÉ ──────────────────────────────────────────────────────
function JeunesseSociete() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      )
      gsap.fromTo(textRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const pillars = [
    { icon: <i className='fa fa-users' style={{ color: '#6E5440' }}></i>, label: 'Engagement Civique', desc: 'Prendre part activement aux décisions et projets qui transforment notre région.' },
    { icon: <i className='fa fa-lightbulb-o' style={{ color: '#6E5440' }}></i>, label: 'Leadership & Innovation', desc: 'Développer des idées nouvelles pour répondre aux défis d\'aujourd\'hui.' },
    { icon: <i className='fa fa-handshake-o' style={{ color: '#6E5440' }}></i>, label: 'Solidarité Active', desc: 'Construire un réseau d\'entraide solide pour ne laisser aucun jeune de côté.' },
  ]

  return (
    <section id="jeunesse-societe" ref={sectionRef} style={{ background: '#FBF9F6', padding: '8rem 2rem', overflow: 'hidden' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
      }}>

        {/* IMAGE — à gauche */}
        <div ref={imageRef} style={{ opacity: 0, position: 'relative' }}>
          {/* Cadre décoratif brun */}
          <div style={{
            position: 'absolute',
            top: '-16px',
            left: '-16px',
            right: '16px',
            bottom: '16px',
            border: '1px solid rgba(110,84,64,0.2)',
            borderRadius: '2rem',
            zIndex: 0,
            pointerEvents: 'none',
          }} />
          {/* Image complète */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            borderRadius: '2rem',
            overflow: 'hidden',
            border: '1px solid rgba(110,84,64,0.15)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(110,84,64,0.1)',
            background: '#f0ece6',
          }}>
            <img
              src="/jeunesse-societe.jpg"
              alt="Groupe de jeunes universitaires africains — R.A.E.E.S."
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
                aspectRatio: '4/3'
              }}
            />
            {/* Stat overlay */}
            <div style={{
              position: 'absolute',
              bottom: '1.25rem',
              right: '1.25rem',
              background: 'rgba(251,249,246,0.95)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(110,84,64,0.15)',
              borderRadius: '1rem',
              padding: '0.75rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.2rem',
              textAlign: 'right'
            }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#6E5440', lineHeight: 1 }}>
                <CountUp end={100} suffix="%" enableScrollSpy scrollSpyOnce />
              </span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: 'rgba(13,13,18,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Engagés pour l'avenir
              </span>
            </div>
          </div>
        </div>

        {/* TEXT — à droite */}
        <div ref={textRef}>
          <div style={{ opacity: 0 }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#6E5440',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1.25rem',
            }}>
              Avenir & Impact
            </span>
          </div>

          <div style={{ opacity: 0 }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: '#0D0D12',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              marginBottom: '1.5rem',
            }}>
              La jeunesse n'est pas l'avenir,<br />
              <span style={{ color: '#6E5440' }}>elle est le présent.</span>
            </h2>
          </div>

          <div style={{ opacity: 0 }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(13,13,18,0.65)',
              fontSize: '1rem',
              lineHeight: 1.8,
              marginBottom: '1.25rem',
            }}>
              La vitalité d'une société se mesure à l'engagement de sa jeunesse. Au R.A.E.E.S., nous considérons chaque jeune du Septentrion comme un acteur clé du changement, capable de transformer sa communauté par ses idées et ses actions.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(13,13,18,0.65)',
              fontSize: '1rem',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}>
              Une vie de jeune accomplie en société exige de prendre ses responsabilités : se former, s'entraider, et bâtir des projets qui dépassent l'intérêt individuel. Nous vous donnons les outils pour devenir ces leaders éclairés.
            </p>
          </div>

          <div style={{ opacity: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {pillars.map(p => (
                <div key={p.label} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  background: 'rgba(110,84,64,0.06)',
                  border: '1px solid rgba(110,84,64,0.12)',
                  borderRadius: '1rem',
                  padding: '1rem 1.25rem',
                }}>
                  <span style={{ fontSize: '1.25rem', flexShrink: 0, width: '24px', textAlign: 'center' }}>{p.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#0D0D12', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                      {p.label}
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(13,13,18,0.55)', fontSize: '0.82rem', lineHeight: 1.6 }}>
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

// ─── PHILOSOPHY ──────────────────────────────────────────────────────────────
function Philosophy() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
      gsap.fromTo(contentRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 70%' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="philosophie" ref={sectionRef} style={{ background: '#2A2A35', padding: '10rem 2rem', position: 'relative', overflow: 'hidden' }}>
      {/* Texture parallax bg */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-20%',
          backgroundImage: `url(${PHILOSOPHY_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.07,
          zIndex: 0,
        }}
      />

      <div ref={contentRef} style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        {/* Eyebrow */}
        <span className="font-mono-jet" style={{ color: '#D9A84F', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '2.5rem' }}>
          Notre manifeste
        </span>

        {/* Small citation */}
        <p className="font-inter" style={{
          color: 'rgba(245,240,232,0.45)',
          fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
          lineHeight: 1.8,
          marginBottom: '3rem',
          fontStyle: 'italic',
        }}>
          "La plupart des associations étudiantes se concentrent sur :<br />
          les activités sociales et les événements ponctuels."
        </p>

        {/* Main citation */}
        <blockquote className="font-playfair" style={{
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: 'clamp(1.8rem, 4vw, 4rem)',
          color: '#F5F0E8',
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
          margin: 0,
          padding: 0,
          border: 'none',
        }}>
          "Nous nous concentrons sur :{' '}
          <span style={{ color: '#D9A84F' }}>l'avenir</span>
          {' '}durable de chaque étudiant du{' '}
          <span style={{ color: '#D9A84F' }}>Septentrion</span>."
        </blockquote>

        {/* Attribution */}
        <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <div style={{ height: '1px', width: '60px', background: 'rgba(217,168,79,0.3)' }} />
          <span className="font-mono-jet" style={{ color: 'rgba(245,240,232,0.35)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            R.A.E.E.S. · Fondé 2018 · Soa, Cameroun
          </span>
          <div style={{ height: '1px', width: '60px', background: 'rgba(217,168,79,0.3)' }} />
        </div>
      </div>
    </section>
  )
}

// ─── SVG VISUALS ─────────────────────────────────────────────────────────────
function ConcentricRings() {
  return (
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0 80 80" to="360 80 80" dur="12s" repeatCount="indefinite" />
        <circle cx="80" cy="80" r="60" stroke="rgba(217,168,79,0.25)" strokeWidth="1.5" strokeDasharray="8 6" fill="none" />
        <circle cx="80" cy="80" r="44" stroke="rgba(217,168,79,0.15)" strokeWidth="1" fill="none" />
      </g>
      <g>
        <animateTransform attributeName="transform" type="rotate" from="360 80 80" to="0 80 80" dur="8s" repeatCount="indefinite" />
        <circle cx="80" cy="80" r="28" stroke="rgba(217,168,79,0.3)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
      </g>
      <circle cx="80" cy="80" r="6" fill="#D9A84F" opacity="0.9" />
      <circle cx="80" cy="80" r="3" fill="#D9A84F" />
    </svg>
  )
}

function LaserGrid({ containerRef }) {
  const lineRef = useRef(null)

  useEffect(() => {
    if (!lineRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { attr: { y1: 0, y2: 0 } },
        {
          attr: { y1: 128, y2: 128 },
          duration: 2.5,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
        }
      )
    })
    return () => ctx.revert()
  }, [])

  const dots = []
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      dots.push({ x: 8 + c * 16, y: 8 + r * 16 })
    }
  }

  return (
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="1.5" fill="rgba(217,168,79,0.25)" />
      ))}
      <line ref={lineRef} x1="0" y1="0" x2="140" y2="0" stroke="rgba(217,168,79,0.7)" strokeWidth="1.5" />
    </svg>
  )
}

function EcgLine() {
  const pathD = "M0,64 L20,64 L28,20 L36,108 L44,64 L60,64 L68,40 L76,88 L84,64 L120,64"
  const pathRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    if (!pathRef.current) return
    const length = 200
    gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length })
    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
    })
  }, [])

  return (
    <svg width="140" height="140" viewBox="0 0 120 128" fill="none">
      <path ref={pathRef} d={pathD} stroke="#D9A84F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle r="4" fill="#D9A84F" opacity="0.9">
        <animateMotion dur="2.5s" repeatCount="indefinite" path={pathD} />
      </circle>
    </svg>
  )
}

// ─── PROTOCOL ────────────────────────────────────────────────────────────────
const STEPS = [
  {
    num: '01',
    title: 'Adhérer au réseau',
    desc: 'Rejoignez R.A.E.E.S. avec des frais d\'adhésion de 1 000 FCFA. Vous recevez un badge officiel signé par le Président National, les textes fondateurs et accédez immédiatement au réseau.',
    visual: <ConcentricRings />,
  },
  {
    num: '02',
    title: 'Participer activement',
    desc: 'Assistez aux réunions bimensuelles chaque dimanche de 14h à 16h. Impliquez-vous dans les projets culturels, communautaires et les initiatives de protection de l\'environnement.',
    visual: <LaserGrid />,
  },
  {
    num: '03',
    title: 'Grandir & rayonner',
    desc: 'Développez votre réseau professionnel, accédez à des opportunités uniques et contribuez au rayonnement du Septentrion. Unité — Équité — Succès.',
    visual: <EcgLine />,
  },
]

function Protocol() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const stepsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headerRef.current, start: 'top 80%' } }
      )
      if (stepsRef.current) {
        gsap.fromTo(stepsRef.current.children,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.2, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: stepsRef.current, start: 'top 75%' }
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="protocole" ref={sectionRef} style={{ background: '#0D0D12', padding: '8rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="font-mono-jet" style={{ color: '#D9A84F', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            Comment ça marche
          </span>
          <h2 className="font-playfair" style={{
            fontWeight: 700, fontStyle: 'italic',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            color: '#F5F0E8', lineHeight: 1.2,
          }}>
            Trois étapes vers l'excellence.
          </h2>
        </div>

        {/* Steps */}
        <div ref={stepsRef} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {STEPS.map((step) => (
            <div
              key={step.num}
              style={{
                background: '#2A2A35',
                border: '1px solid rgba(217,168,79,0.1)',
                borderRadius: '2.5rem',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '2.5rem',
                flexWrap: 'wrap',
              }}
            >
              {/* Text */}
              <div style={{ flex: 1, minWidth: '240px' }}>
                <span className="font-mono-jet" style={{ color: 'rgba(217,168,79,0.5)', fontSize: '0.75rem', letterSpacing: '0.15em', display: 'block', marginBottom: '0.75rem' }}>
                  Étape {step.num}
                </span>
                <h3 className="font-inter" style={{ color: '#F5F0E8', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.85rem', lineHeight: 1.3 }}>
                  {step.title}
                </h3>
                <p className="font-inter" style={{ color: 'rgba(245,240,232,0.55)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  {step.desc}
                </p>
              </div>

              {/* Visual */}
              <div style={{ width: '160px', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {step.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PRICING ─────────────────────────────────────────────────────────────────
const PLANS = [
  {
    name: 'Membre Simple',
    price: '3 000',
    unit: 'FCFA/an',
    adhesion: '+ 1 000 FCFA adhésion',
    featured: false,
    features: [
      'Badge officiel R.A.E.E.S.',
      'Réunions bimensuelles',
      'Droit de vote aux élections',
      'Statuts & règlement intérieur',
      'Réseau de solidarité',
    ],
    cta: 'Rejoindre',
    ctaStyle: 'outline',
  },
  {
    name: 'Membre Bureau',
    price: '5 000',
    unit: 'FCFA/an',
    adhesion: '+ 1 000 FCFA adhésion',
    featured: true,
    features: [
      'Tout du Membre Simple',
      'Poste au bureau exécutif',
      'Pouvoir de décision',
      'Responsabilité des antennes',
      'Représentation officielle',
    ],
    cta: 'Rejoindre au bureau',
    ctaStyle: 'primary',
  },
  {
    name: "Membre d'Honneur",
    price: 'Sur invitation',
    unit: '',
    adhesion: 'Invitation du bureau',
    featured: false,
    features: [
      'Reconnaissance officielle',
      'Rôle de conseiller',
      'Accès aux événements spéciaux',
      'Ambassadeur R.A.E.E.S.',
      'Distinction honorifique',
    ],
    cta: 'Nous contacter',
    ctaStyle: 'outline',
  },
]

function Pricing() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headerRef.current, start: 'top 80%' } }
      )
      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 75%' }
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="adhesion" ref={sectionRef} style={{ background: '#FAF8F5', padding: '8rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="font-mono-jet" style={{ color: '#6E5440', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            Adhésion
          </span>
          <h2 className="font-playfair" style={{
            fontWeight: 700, fontStyle: 'italic',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            color: '#0D0D12', lineHeight: 1.2,
          }}>
            Choisissez votre niveau d'engagement.
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.featured ? '#0D0D12' : '#fff',
                border: plan.featured ? '2px solid rgba(217,168,79,0.5)' : '1px solid rgba(0,0,0,0.08)',
                borderRadius: '2rem',
                padding: '2.5rem',
                transform: plan.featured ? 'scale(1.03)' : 'scale(1)',
                boxShadow: plan.featured ? '0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(217,168,79,0.2)' : '0 4px 24px rgba(0,0,0,0.06)',
                transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                if (!plan.featured) {
                  e.currentTarget.style.transform = 'scale(1.01)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'
                }
              }}
              onMouseLeave={e => {
                if (!plan.featured) {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'
                }
              }}
            >
              {plan.featured && (
                <div style={{
                  position: 'absolute', top: '1.25rem', right: '1.25rem',
                  background: 'rgba(217,168,79,0.15)',
                  border: '1px solid rgba(217,168,79,0.3)',
                  borderRadius: '100px',
                  padding: '0.25rem 0.75rem',
                }}>
                  <span className="font-mono-jet" style={{ color: '#D9A84F', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Populaire
                  </span>
                </div>
              )}

              <span className="font-mono-jet" style={{ color: plan.featured ? 'rgba(217,168,79,0.6)' : 'rgba(110,84,64,0.7)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                {plan.name}
              </span>

              <div style={{ marginBottom: '0.35rem' }}>
                <span className="font-inter" style={{ color: plan.featured ? '#D9A84F' : '#0D0D12', fontSize: plan.unit ? '2.5rem' : '1.5rem', fontWeight: 800, lineHeight: 1 }}>
                  {plan.price}
                </span>
                {plan.unit && (
                  <span className="font-inter" style={{ color: plan.featured ? 'rgba(245,240,232,0.5)' : 'rgba(13,13,18,0.45)', fontSize: '0.85rem', marginLeft: '0.35rem' }}>
                    {plan.unit}
                  </span>
                )}
              </div>

              <p className="font-mono-jet" style={{ color: plan.featured ? 'rgba(217,168,79,0.5)' : 'rgba(110,84,64,0.6)', fontSize: '0.7rem', marginBottom: '2rem' }}>
                {plan.adhesion}
              </p>

              <div style={{ borderTop: `1px solid ${plan.featured ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`, paddingTop: '1.5rem', marginBottom: '2rem' }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: plan.featured ? 'rgba(217,168,79,0.15)' : 'rgba(110,84,64,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={10} color={plan.featured ? '#D9A84F' : '#6E5440'} />
                    </div>
                    <span className="font-inter" style={{ color: plan.featured ? 'rgba(245,240,232,0.75)' : 'rgba(13,13,18,0.7)', fontSize: '0.875rem' }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={plan.ctaStyle === 'primary' ? 'btn-primary' : 'btn-outline'}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  ...(plan.ctaStyle === 'outline' && plan.featured
                    ? { color: '#D9A84F', borderColor: 'rgba(217,168,79,0.4)' }
                    : {}),
                }}
              >
                <MessageCircle size={15} />
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#0D0D12', borderRadius: '4rem 4rem 0 0', padding: '5rem 2rem 2.5rem', marginTop: '-2px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {/* Col 1 - Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <img src="/logo.png" alt="R.A.E.E.S. Logo" style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(217,168,79,0.3)' }} />
              <h3 className="font-inter" style={{ color: '#D9A84F', fontWeight: 800, fontSize: '1.3rem', margin: 0 }}>
                R.A.E.E.S.
              </h3>
            </div>
            <p className="font-playfair" style={{ color: 'rgba(245,240,232,0.5)', fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Unité — Équité — Succès
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(245,240,232,0.65)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#D9A84F'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.65)'}
              >
                <MessageCircle size={14} color="#D9A84F" />
                WhatsApp : 653 921 642
              </a>
              <a href="tel:+237690664137" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(245,240,232,0.65)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#D9A84F'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.65)'}
              >
                <Phone size={14} color="#D9A84F" />
                Tél : 690 664 137
              </a>
              <a href="tel:+237695553936" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(245,240,232,0.65)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#D9A84F'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.65)'}
              >
                <Phone size={14} color="#D9A84F" />
                Tél : 695 553 936
              </a>
              <a href="https://www.facebook.com/profile.php?id=100064578020736" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(245,240,232,0.65)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#D9A84F'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.65)'}
              >
                <Facebook size={14} color="#D9A84F" />
                Facebook R.A.E.E.S.
              </a>
            </div>
          </div>

          {/* Col 2 - Navigation */}
          <div>
            <h4 className="font-mono-jet" style={{ color: 'rgba(217,168,79,0.6)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Navigation
            </h4>
            {['Missions', 'À propos', 'Processus', 'Devenir membre'].map((item, i) => {
              const hrefs = ['#features', '#philosophie', '#protocole', '#adhesion']
              return (
                <a key={item} href={hrefs[i]} style={{ display: 'block', color: 'rgba(245,240,232,0.55)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '0.75rem', transition: 'all 0.2s', fontFamily: 'Inter, sans-serif' }}
                  onMouseEnter={e => { e.target.style.color = '#D9A84F'; e.target.style.transform = 'translateY(-1px)' }}
                  onMouseLeave={e => { e.target.style.color = 'rgba(245,240,232,0.55)'; e.target.style.transform = 'translateY(0)' }}
                >
                  {item}
                </a>
              )
            })}
          </div>

          {/* Col 3 - Documents */}
          <div>
            <h4 className="font-mono-jet" style={{ color: 'rgba(217,168,79,0.6)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Documents
            </h4>
            {['Statuts de l\'association', 'Règlement intérieur', 'Formulaire d\'adhésion', 'Antennes régionales'].map(item => (
              <a key={item} href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'rgba(245,240,232,0.55)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '0.75rem', transition: 'all 0.2s', fontFamily: 'Inter, sans-serif' }}
                onMouseEnter={e => { e.target.style.color = '#D9A84F'; e.target.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.target.style.color = 'rgba(245,240,232,0.55)'; e.target.style.transform = 'translateY(0)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '2rem' }} />

        {/* Bottom */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <span className="font-mono-jet" style={{ color: 'rgba(245,240,232,0.3)', fontSize: '0.7rem', letterSpacing: '0.05em' }}>
            © 2024 R.A.E.E.S. · Enreg. N° 093/RDA/JO5/SAAJP · Soa, Cameroun
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ position: 'relative', width: '7px', height: '7px' }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#4ade80', animation: 'pulse-ring 2s ease-out infinite' }} />
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', position: 'relative' }} />
            </div>
            <span className="font-mono-jet" style={{ color: 'rgba(245,240,232,0.3)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Association opérationnelle
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {


  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div style={{ minHeight: '100vh', background: '#0D0D12' }}>
      <Navbar />
      <Hero />
      <Features />
      <EducationShowcase />
      <FemmeScolarisee />
      <JeunesseSociete />
      <Philosophy />
      <Protocol />
      <Pricing />
      <Footer />
      </div>
    </ReactLenis>
  )
}

