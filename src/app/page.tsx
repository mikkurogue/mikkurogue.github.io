import ExperienceSection from "../components/experience-section";
import ProjectsSection from "../components/projects/project-section";
import TerminalHero from "../components/terminal-hero";

export default function Home() {
	return (
		<>
			<TerminalHero />
			<ProjectsSection />
			<ExperienceSection />
		</>
	);
}
