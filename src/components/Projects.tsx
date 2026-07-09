const projects = [
  {
    title: 'Developer Portfolio',
    status: 'In Progress',
    description: 'Full-stack portfolio site with Clean Architecture backend, GitHub API integration and contact form.',
    tags: ['React', 'TypeScript', 'ASP.NET Core', 'PostgreSQL'],
    link: 'https://github.com/pratikshas2111/Pratiksha-Portfolio'
  },
  {
    title: 'Quiz App',
    status: 'In Progress',
    description: 'Interactive quiz application built with React and TypeScript.',
    tags: ['React', 'TypeScript'],
    link: 'https://github.com/pratikshas2111'
  }
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '2.5rem 0', borderTop: '1px solid var(--border)' }}>

      <p style={{
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '1.8px',
        color: 'var(--text-muted)',
        marginBottom: '1.25rem',
        fontWeight: 500
      }}>
        Projects
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '12px'
      }}>
        {projects.map((project) => (
          <div key={project.title} style={{
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>

            <span style={{
              fontSize: '10px',
              color: '#e3b341',
              backgroundColor: 'rgba(227,179,65,0.1)',
              padding: '2px 8px',
              borderRadius: '10px',
              display: 'inline-block',
              width: 'fit-content'
            }}>
              {project.status}
            </span>

            <p style={{ fontSize: '15px', fontWeight: 600 }}>{project.title}</p>

            <p style={{
              fontSize: '13px',
              color: 'var(--text-muted)',
              lineHeight: 1.6
            }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '0.5rem' }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: '11px',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--bg)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <a href={project.link} target="_blank" rel="noreferrer" style={{
              fontSize: '12px',
              color: 'var(--accent)',
              marginTop: '0.5rem'
            }}>
              View on GitHub →
            </a>

          </div>
        ))}
      </div>

    </section>
  )
}