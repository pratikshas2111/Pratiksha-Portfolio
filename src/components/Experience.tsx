const experiences = [
    {
        company: 'Sequretek Pvt. Ltd.',
        role: 'Software Engineer',
        duration: 'Feb 2025 - Present',
        current:false,
        description: 'Built Enterprise IGA platform for may clients like Axis, NPCI, Bandhan Bank, Agartas etc. using .NET Core, React, and SQL Server. Implemented features like user provisioning, access reviews, and role-based access control.Developed batch jobs, PDF utilities, ACM AM and MSMQ-based workflows in C#. Collaborated with cross-functional teams to deliver SOAR connectors also connected to client.'

    }
]

export default function Experience() {

    return(
        <section id="experience" style={{ padding: '2.5rem 0', borderTop: '1px solid var(--border)' }}>

<p style={{
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '1.8px',
    color: 'var(--text-muted)',
    marginBottom: '1.25rem',
    fontWeight: 500
}}>
    Experience
</p>
<div style={{
    position: 'relative',
    paddingLeft: '1.5rem',}}>
<div style={{
    position: 'absolute',
    left: 0,
    top: '8px',
    width: '1px',
    backgroundColor : 'var(--border)',
        
    
}} />

{
    experiences.map((exp) => (
        <div key={exp.company} style={{
            position: 'relative',
            paddingBottom : '2rem'
        }}>
            <div style={{

                position: 'absolute',
                left: '-1.5rem',
                top: '5px',
                width: '9px',
                height: '9px',
                borderRadius: '50%',
                backgroundColor: exp.current ? 'var(--green)' : 'var(--text-muted)',
                border: '2px solid var(--bg)',
                transform: 'translateX(-4px)'

            }} />
                <p style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    marginBottom: '2px',
                }}>
                  {exp.role}
                </p>
                <p style={{
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '0.5rem',
                }}>
                    {exp.duration}
                </p>
                <p style={
                    {
                        fontSize: '13px',
                        color: 'var(--text-muted)',
                        lineHeight: 1.7
                    }
                }>
                    {exp.description}
                </p>

                </div>
               ) )}
            </div>
    

    </section>
    )
}