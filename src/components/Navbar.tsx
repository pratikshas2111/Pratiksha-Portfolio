import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 0',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      backgroundColor: scrolled ? 'rgba(13,17,23,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      zIndex: 100,
      transition: 'background-color 0.3s ease'
    }}>

      <span style={{ fontWeight: 600, letterSpacing: '-0.3px' }}>
        PS <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>/ portfolio</span>
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <a href="#skills" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Skills</a>
        <a href="#projects" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Projects</a>
        <a href="#experience" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Experience</a>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '11px',
          padding: '4px 12px',
          borderRadius: '20px',
          backgroundColor: 'var(--green-bg)',
          color: 'var(--green)',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--green)',
            animation: 'pulse 2s infinite'
          }} />
          Open to remote
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </nav>
  )
}