export default function Header() {
	return (
		<header className="header">
			<div className="container">
				<nav className="nav">
					<a href="/" className="logo">
						mikkurogue.dev
					</a>

					<ul className="nav-list">
						<li>
							<a href="/" className="nav-link active">
								Home
							</a>
						</li>
						<li>
							<a href="/#projects" className="nav-link">
								Projects
							</a>
						</li>
						<li>
							<a href="/#experience" className="nav-link">
								Experience
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
