export default function WiseWordsSection() {
    return (
        <section id="wise-words" className="section">
            <div className="section-header">
                <h2 className="section-title">Wise words to learn from</h2>
            </div>

            <div className="tweet-card">
                <div className="tweet-header">
                    <img
                        src="https://pbs.twimg.com/profile_images/1354238836331732992/WV8pJR0U_normal.jpg"
                        alt="Josh Manders profile picture"
                        className="tweet-avatar"
                    />
                    <div className="tweet-content">
                        <div className="tweet-meta">
                            <span className="tweet-name">Josh Manders</span>
                            <span className="tweet-handle">@joshmanders</span>
                            <span style={{ color: 'var(--text-muted)' }}>•</span>
                            <span className="tweet-date">May 14, 2025</span>
                        </div>
                        <div className="tweet-text">
                            We're all retarded one way or another.
                            <br /><br />
                            Just acknowledge where you're retarded and either improve so you're no longer retarded, or don't act like you're not retarded.
                        </div>

                        <div className="tweet-actions">
                            <a
                                href="https://twitter.com/joshmanders/status/1922747431868883100"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="tweet-link"
                            >
                                View on X
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
