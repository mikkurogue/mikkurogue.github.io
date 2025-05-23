const skills = {
  frontend: ['typescript', 'nextjs', 'rust', 'php'],
  backend: ['rust', 'nodejs', 'graphql', 'zig', 'go', 'sqlite', 'postgres'],
  tools: ['git', 'linux', 'nushell', 'neovim']
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Tooling</h2>
      
      <div className="grid grid-cols-3">
        <div className="card">
          <h3 style={{ color: 'var(--accent-bright)', marginBottom: '1rem', fontWeight: '500' }}>Frontend</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.frontend.map((skill) => (
              <span key={skill} className={`tag ${skill}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 style={{ color: 'var(--accent-bright)', marginBottom: '1rem', fontWeight: '500' }}>Backend</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.backend.map((skill) => (
              <span key={skill} className={`tag ${skill}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 style={{ color: 'var(--accent-bright)', marginBottom: '1rem', fontWeight: '500' }}>Tools</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.tools.map((skill) => (
              <span key={skill} className={`tag ${skill}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}