function Page() {
	return (
		<>
			<div className="section-header">
				<h1 className="section-title">taskr</h1>
				<p>
					A small task runner/build tool to help chain some commands together in
					projects.
				</p>
			</div>

			<section className="project-details">
				<h2>Overview</h2>
				<p>
					taskr is a lightweight CLI tool written in Rust that allows developers
					to define and chain tasks for their projects, streamlining repetitive
					command sequences.
				</p>

				<h2>Features</h2>
				<ul>
					<li>Define custom tasks in a simple configuration file</li>
					<li>Chain multiple commands into a single task</li>
					<li>Cross-platform support</li>
					<li>Parallel task execution</li>
				</ul>

				<h2>Technologies Used</h2>
				<ul>
					<li>Rust</li>
					<li>CLI</li>
					<li>Cross-platform compatibility</li>
				</ul>

				<h2>Links</h2>
				<ul>
					<li>
						<a
							className="nav-link"
							href="https://github.com/mikkurogue/taskr"
							rel="noreferrer"
							target="_blank"
						>
							GitHub Repository
						</a>
					</li>
				</ul>
			</section>
		</>
	);
}

export default Page;
