export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-links">
					<a
						href="https://github.com/mikkurogue"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-link"
					>
						GitHub
					</a>
					<a
						href="https://linkedin.com/in/mrj-lindemans"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-link"
					>
						LinkedIn
					</a>
					{/* <a */}
					{/*     href="mailto:hello@mikkurogue.dev" */}
					{/*     className="footer-link" */}
					{/* > */}
					{/*     Email */}
					{/* </a> */}
				</div>
				<p className="footer-text">
					&copy; 2025 Mikku made with love in Finland.
				</p>
			</div>
		</footer>
	);
}
