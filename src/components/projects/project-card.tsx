"use client";

import { MouseEvent } from "react";
import Badge from "../badge";

type ProjectCardProps = {
	project: Project;
};

export type Project = {
	id: string;
	name: string;
	description: string;
	tags: string[];
	url: string;
	active?: boolean;
	docUrl?: string;
	docButtonText?: string;
};

export default function ProjectCard({ project }: ProjectCardProps) {
	const active = project.active ? "active" : "inactive";

	function navigate(
		e: MouseEvent<HTMLDivElement | HTMLButtonElement>,
		url: string,
	) {
		e.stopPropagation();
		e.preventDefault();
		window.open(url, "_blank", "noopener,noreferrer");
	}

	return (
		<div
			key={project.id}
			onClick={(e) => navigate(e, project.url)}
			style={{ textDecoration: "none" }}
		>
			<div className="card">
				<h3
					style={{
						fontSize: "1.1rem",
						fontWeight: "600",
						color: "var(--text-primary)",
						marginBottom: "0.75rem",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					{project.name}
					<Badge variant={active}>{active}</Badge>
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

				<div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
					{project.docUrl && (
						<button
							onClick={(e) => navigate(e, project.docUrl)}
							style={{
								fontFamily: "monospace",
								fontSize: "0.8rem",
								padding: "4px 10px",
								borderRadius: "3px",
								border: "1px solid #5f5f5f",
								background: "#1c1c1c",
								color: "#23ff7e",
								cursor: "pointer",
								boxShadow: "0 0 0 1px #000 inset",
								transition: "all 0.1s ease-in-out",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background = "#333";
								e.currentTarget.style.borderColor = "#8f8f8f";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background = "#1c1c1c";
								e.currentTarget.style.borderColor = "#5f5f5f";
							}}
							onMouseDown={(e) => {
								e.currentTarget.style.background = "#000";
								e.currentTarget.style.transform = "translateY(1px)";
							}}
							onMouseUp={(e) => {
								e.currentTarget.style.background = "#333";
								e.currentTarget.style.transform = "translateY(0)";
							}}
						>
							[ {project.docButtonText ? project.docButtonText : "Docs"} ]
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
