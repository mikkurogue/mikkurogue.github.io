import TerminalHero from "../components/terminal-hero";
import SkillsSection from "../components/skills-section";
import ExperienceSection from "../components/experience-section";
import WiseWordsSection from "../components/wise-words-section";
import ProjectsSection from "../components/projects/project-section";

export default function Home() {
	return (
		<>
			{" "}
			<TerminalHero />
			<ProjectsSection />
			<SkillsSection />
			<ExperienceSection />
			<WiseWordsSection />
			{/* <BlogSection /> */}
		</>
	);
}
