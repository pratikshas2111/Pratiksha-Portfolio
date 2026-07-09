
const skillGroups = [
  {
    name: 'Backend',
    skills: ['C# / .NET Core', 'ASP.NET Core API', 'MediatR / CQRS', 'Entity Framework']
  },
  {
    name: 'Frontend',
    skills: ['React', 'TypeScript', 'HTML / CSS', 'REST Integration']
  },
  {
    name: 'Database',
    skills: ['Oracle PL/SQL', 'PostgreSQL', 'Stored Procedures']
  },
  {
    name: 'Tools',
    skills: ['Git / GitLab', 'IIS Deployment', 'Visual Studio', 'MSMQ']
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '2.5rem 0', borderTop: '1px solid var(--border)' }}>

      <p style={{
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '1.8px',
        color: 'var(--text-muted)',
        marginBottom: '1.25rem',
        fontWeight: 500
      }}>
        Skills
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '12px'
      }}>
        {skillGroups.map((group) => (
          <div key={group.name} style={{
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '1rem'
          }}>
            <p style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              color: 'var(--text-muted)',
              marginBottom: '0.75rem',
              fontWeight: 500
            }}>
              {group.name}
            </p>

            {group.skills.map((skill) => (
              <p key={skill} style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                padding: '3px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span style={{
                  width: '3px',
                  height: '3px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--border)',
                  display: 'inline-block',
                  flexShrink: 0
                }} />
                {skill}
              </p>
            ))}
          </div>
        ))}
      </div>

    </section>
  )
}