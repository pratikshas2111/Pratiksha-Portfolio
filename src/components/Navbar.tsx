import { useState, useEffect } from "react"

export default function Navbar(){
    const[scrolled, setScrolled] = useState(false)
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
            backgroundColor: scrolled ? 'rgba(13,17,23,0.92)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            zIndex: 100,
            transition: 'background-color 0.3s ease'

        }}>

            <a href="#hero" style={{ fontWeight: 700, letterSpacing: '-0.3px', color: 'var(--text)', textDecoration: 'none' }}>
                Pratiksha
            </a>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>
                    Projects
                </a>
                <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>
                    About
                </a>
                <a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>
                    Contact
                </a>
            </div>
        </nav>
    )
}