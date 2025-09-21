import ProjectCard, { type Project } from "./project-card";

const projects: Project[] = [
    {
        id: "xcsv",
        name: "xcsv",
        description: "A fast, lightweight and effecient excel to csv conversion tool. Ideal for large excel sheets and cheap to run due to low memory overhead. Both input and output is streamed for a seamless, low footprint experience.",
        tags: ["rust", "cli"],
        active: true,
        url: "https://mikkurogue.github.io/xcsv/" 
    },
	{
		id: "taskr",
		name: "taskr",
		description:
			"A small task runner/build tool to help chain some commands together in projects.",
		tags: ["rust", "arch", "cli"],
		url: "/projects/taskr",
	},
	{
		id: "cube-type-extract-rs",
		name: "cube-type-extract-rs",
		description:
			"A tool that generates TypeScript types from Cube.js metadata, for an easier intergration between Cube.js and TypeScript applications.",
		tags: ["rust", "typescript", "cli"],
		url: "https://github.com/mikkurogue/cube-type-extract-rs",
		active: true,
	},
	{
		id: "zigsh",
		name: "zigsh",
		description:
			"A minimal shell implemented in Zig, created as a learning project to explore shell development and the Zig programming language.",
		tags: ["zig", "cli"],
		url: "https://github.com/mikkurogue/zigsh",
	},
	{
		id: "rmv",
		name: "rmv",
		description:
			"A CLI tool designed to streamline the removal of files or directories with enhanced safety checks and user confirmations.",
		tags: ["rust", "cli"],
		url: "https://github.com/mikkurogue/rmv",
	},
	{
		id: "tta",
		name: "tta",
		description:
			"A Rust-based tool that analyzes TypeScript projects to identify and list duplicated type definitions, aiding in codebase maintenance.",
		tags: ["rust", "typescript", "cli"],
		url: "https://github.com/mikkurogue/tta",
	},
	{
		id: "libarr",
		name: "libarr",
		description:
			"An experimental Zig library exploring array utilities, created as a learning project to delve into Zig's capabilities.",
		tags: ["zig"],
		url: "https://github.com/mikkurogue/libarr",
	},
	{
		id: "dagger",
		name: "dagger",
		description:
			"A Go-based CLI tool that assists in setting up developer environments by automating the installation of essential tools and editors.",
		tags: ["go", "cli"],
		url: "https://github.com/mikkurogue/dagger",
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
