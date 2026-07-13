// Using the new JSX transform; no need to import React explicitly

const techPills = [
  { label: 'C# / .NET Core', highlight: true },
  { label: 'React', highlight: true },
  { label: 'TypeScript', highlight: true },
  { label: 'Oracle SQL', highlight: false },
  { label: 'REST APIs', highlight: false },
  { label: 'Clean Architecture', highlight: false },
]

export default function Hero() {
  return (
    <section style={{ padding: '3.5rem 0 3rem' }}>

      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        color: 'var(--text-muted)',
        marginBottom: '1.25rem'
      }}>
        {'// '}
        <span style={{ color: 'var(--accent)' }}>src</span>
        {' / '}
        <span style={{ color: 'var(--accent)' }}>engineers</span>
        {' / '}
        <span style={{ color: 'var(--accent)' }}>princy-singh</span>
      </p>

      <h1 style={{
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-2px',
        lineHeight: 1.1,
        marginBottom: '0.75rem'
      }}>
        Pratiksha Singh
      </h1>

      <p style={{
        fontSize: '18px',
        color: 'var(--text-muted)',
        marginBottom: '1.75rem'
      }}>
        .NET Full Stack Developer · Building with React + ASP.NET Core
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem' }}>
        {techPills.map((pill) => (
          <span
            key={pill.label}
            style={{
              fontSize: '12px',
              padding: '4px 14px',
              borderRadius: '20px',
              fontFamily: 'var(--font-mono)',
              backgroundColor: pill.highlight ? 'var(--accent-bg)' : 'var(--surface)',
              color: pill.highlight ? 'var(--accent)' : 'var(--text-muted)',
              border: `1px solid ${pill.highlight ? 'var(--accent)' : 'var(--border)'}`,
            }}
          >
            {pill.label}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        <a href="#projects">
          <button style={{
            padding: '10px 24px',
            borderRadius: '8px',
            backgroundColor: 'var(--text)',
            color: 'var(--bg)',
            border: 'none',
            fontWeight: 600,
            fontSize: '14px',
          }}>
            View projects
          </button>
        </a>

        <a href="https://github.com/pratikshas2111" target="_blank" rel="noreferrer">
          <button style={{
            padding: '10px 20px',
            borderRadius: '8px',
            backgroundColor: 'transparent',
            color: 'var(--text)',
            border: '1px solid var(--border)',
            fontSize: '14px',
          }}>
            GitHub →
          </button>
        </a>
        {/*Add resume download button */}
        <a href="/Pratiksha_Singh_Resume.pdf" download = "Pratiksha_Singh_Resume.pdf">
        <button  style={{
           padding: '10px 20px',
           borderRadius: '8px',
           backgroundColor: 'transparent',
           color: 'var(--green)',
           border: '1px solid var(--green)',
           fontSize: '14px',
           cursor: 'pointer',
        }}>
          Download Resume ↓
          </button>

        </a>
      </div>

    </section>
  )
}