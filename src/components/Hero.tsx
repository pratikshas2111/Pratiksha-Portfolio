export default function Hero() {
  return (
    <section id="hero" style={{ padding: '4rem 0' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <p style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Hi, I'm Pratiksha — a product designer crafting clean digital experiences.
        </p>

        <h1 style={{ margin: '0 0 1.25rem', lineHeight: 1.05, fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Designing thoughtful portfolios, websites, and brand-led interfaces.
        </h1>

        <p style={{ margin: '0 0 2rem', maxWidth: '38rem', color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
          I help creators and small teams launch memorable digital products with clarity, personality, and strong visual systems.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.95rem 1.5rem',
              borderRadius: '999px',
              backgroundColor: 'var(--accent)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Work with me
          </a>
          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.95rem 1.5rem',
              borderRadius: '999px',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            See projects
          </a>
        </div>
      </div>
    </section>
  )
}
