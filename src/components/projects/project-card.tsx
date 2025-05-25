type ProjectCardProps = {
	project: Project;
};

type Project = {
	id: string;
	name: string;
	description: string;
	tags: string[];
	url: string;
};

export default function ProjectCard({ project }: ProjectCardProps) {
	const target = project.url.includes("https") ? "_blank" : undefined;

	return (
		<a key={project.id} href={project.url} rel="noreferrer" target={target}>
			<div className="card">
				<h3
					style={{
						fontSize: "1.1rem",
						fontWeight: "600",
						color: "var(--text-primary)",
						marginBottom: "0.75rem",
					}}
				>
					{project.name}
				</h3>
				<p
					style={{
						color: "var(--text-secondary)",
						marginBottom: "1rem",
						fontSize: "0.9rem",
					}}
				>
					{project.description}
				</p>
				<div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
					{project.tags.map((tag) => (
						<span key={tag} className={`tag ${tag}`}>
							{tag}
						</span>
					))}
				</div>
			</div>
		</a>
	);
}
