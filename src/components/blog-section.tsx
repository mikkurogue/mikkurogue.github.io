const blogPosts = [
  {
    id: 'hello-world',
    title: 'Hello World - Building This Portfolio',
    excerpt: 'Welcome to my new portfolio! In this first post, I\'ll walk through the technical decisions behind building this terminal-inspired developer portfolio using Next.js App Router, TypeScript, and modern web standards.',
    date: 'December 20, 2024',
    readTime: '5 min read',
    slug: 'hello-world'
  }
]

export default function BlogSection() {
  return (
    <section id="blog" className="section">
      <h2 className="section-title">Latest Posts</h2>
      
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {blogPosts.map((post) => (
          <a key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <article className="card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {post.title}
              </h3>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '1rem' }}>
                {post.date} • {post.readTime}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {post.excerpt}
              </p>
            </article>
          </a>
        ))}
      </div>
    </section>
  )
}