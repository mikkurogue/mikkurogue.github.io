import ProjectCard, { type Project } from "./project-card";

const projects: Project[] = [
	{
		id: "ts-analyzer",
		name: "ts-analyzer",
		description: `
      A lightweight TypeScript static analysis tool to read and translate TS errors into an actionable and helpful format.
      Built with Rust, and provides multiple modes for usage; one as a CLI tool and another as a neovim plugin to intercept LSP diagnostics and enhance them on the fly.`,
		tags: [
			"jj",
			"git",
			"typescript",
			"rust",
			"lua",
			"nvim",
			"cli",
			"static-analysis",
		],
		active: true,
		url: "https://github.com/mikkurogue/ts-analyzer",
		docUrl: "https://github.com/mikkurogue/ts-analyzer/tree/master/lua",
		docButtonText: "View Neovim plugin",
	},
	{
		id: "xcsv",
		name: "xcsv",
		description: `A fast, lightweight and effecient excel to csv conversion tool.
      Ideal for large excel sheets and cheap to run due to low memory overhead.
      Both input and output is streamed for a seamless, low footprint experience.
      Eliminates the need for heavy memory consumption by using streaming and effecient xml parsing.
      Provides an installable binary,available as a library for easy integration.`,
		tags: ["rust", "cli", "jj", "git"],
		active: true,
		url: "https://mikkurogue.github.io/xcsv/",
		docUrl: "https://docs.rs/libxcsv/latest/libxcsv/",
		docButtonText: "View docs on docs.rs",
	},
];

export default function ProjectsSection() {
	return (
		<section id="projects" className="section">
			<div className="section-header">
				<h2 className="section-title">Projects</h2>
			</div>

			<div className="grid grid-cols-3">
				{projects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</section>
	);
}
