const projects = [
    {
        id: 'cube-type-extract-rs',
        name: 'cube-type-extract-rs',
        description: 'A tool that extracts and generates TypeScript types from Cube.js schema files, for seamless type-safe integration between Cube.js and TypeScript applications.',
        tags: ['rust', 'typescript', 'cli'],
        url: 'https://github.com/mikkurogue/cube-type-extract-rs'
    },
    {
        id: 'zigsh',
        name: 'zigsh',
        description: 'A minimal shell implemented in Zig, created as a learning project to explore shell development and the Zig programming language.',
        tags: ['zig', 'cli'],
        url: 'https://github.com/mikkurogue/zigsh'
    },
    {
        id: 'rmv',
        name: 'rmv',
        description: 'A CLI tool designed to streamline the removal of files or directories with enhanced safety checks and user confirmations.',
        tags: ['rust', 'cli'],
        url: 'https://github.com/mikkurogue/rmv'
    },
    {
        id: 'tta',
        name: 'tta',
        description: 'A Rust-based tool that analyzes TypeScript projects to identify and list duplicated type definitions, aiding in codebase maintenance.',
        tags: ['rust', 'typescript', 'cli'],
        url: 'https://github.com/mikkurogue/tta'
    },
    {
        id: 'libarr',
        name: 'libarr',
        description: 'An experimental Zig library exploring array utilities, created as a learning project to delve into Zig\'s capabilities.',
        tags: ['zig'],
        url: 'https://github.com/mikkurogue/libarr'
    },
    {
        id: 'dagger',
        name: 'dagger',
        description: 'A Go-based CLI tool that assists in setting up developer environments by automating the installation of essential tools and editors.',
        tags: ['go', 'cli'],
        url: 'https://github.com/mikkurogue/dagger'
    }
]

export default function ProjectsSection() {
    return (
        <section id="projects" className="section">
            <div className="section-header">
                <h2 className="section-title">Projects</h2>
            </div>

            <div className="grid grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="card">
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                            {project.name}
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                            {project.description}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {project.tags.map((tag) => (
                                <span key={tag} className={`tag ${tag}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
