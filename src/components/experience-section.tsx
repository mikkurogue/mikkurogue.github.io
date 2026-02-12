mi const experiences = [
	{
		id: "bigmile",
		company: "BigMile",
		position: "Sr Software Engineer",
		location: "Vantaa, Fi (Remote)",
		period: "01.06.2022 - Present",
		description:
			"Building upon all factors of the Carbon Analytics platform whilst also enabling technical growth and innovation.",
		tags: [
			"typescript",
			"nextjs",
			"rust",
			"postgres",
			"nestjs",
			"graphql",
			"jj",
			"git",
		],
	},
	{
		id: "enelogic",
		company: "Enelogic",
		position: "Software Developer",
		location: "Breskens, NL",
		period: "01.09.2021 - 01.05.2022",
		description:
			"Led the frontend team to migrate the application to a new version.",
		tags: ["nextjs", "php", "graphql", "git"],
	},
	{
		id: "inteqnion",
		company: "Inteqnion BV",
		position: "Software Engineer",
		location: "Aalten, NL",
		period: "01.09.2021 - 01.05.2022",
		description:
			"Worked with the team on the main application and providing more modern javascript practices.",
		tags: ["csharp", "javascript", "git"],
	},
	{
		id: "mrj-software",
		company: "MRJ Software & Consultancy",
		position: "Consultant & Owner",
		location: "Remote",
		period: "01.10.2018 - 01.08.2020",
		description: "My own consulting and software house.",
		tags: ["typescript", "php", "csharp", "c", "cpp", "git"],
	},
];

export default function ExperienceSection() {
	return (
		<section id="experience" className="section">
			<h2 className="section-title">Experience</h2>

			<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
				{experiences.map((experience) => (
					<div key={experience.id} className="card">
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "start",
								marginBottom: "0.75rem",
								flexWrap: "wrap",
								gap: "0.5rem",
							}}
						>
							<div>
								<div
									style={{
										fontSize: "1.1rem",
										fontWeight: "600",
										color: "var(--text-primary)",
									}}
								>
									<span
										style={{ color: "var(--accent-bright)", fontWeight: "500" }}
									>
										{experience.company}
									</span>{" "}
									- {experience.position}
								</div>
								<div
									style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
								>
									{experience.location}
								</div>
							</div>
							<div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
								{experience.period}
							</div>
						</div>

						<p
							style={{
								color: "var(--text-secondary)",
								marginBottom: "1rem",
								fontSize: "0.9rem",
							}}
						>
							{experience.description}
						</p>

						<div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
							{experience.tags.map((tag) => (
								<span key={tag} className={`tag ${tag}`}>
									{tag}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
