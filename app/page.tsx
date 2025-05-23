import Header from './components/header'
import Footer from './components/footer'
import TerminalHero from './components/terminal-hero'
import ProjectsSection from './components/projects-section'
import SkillsSection from './components/skills-section'
import ExperienceSection from './components/experience-section'
import WiseWordsSection from './components/wise-words-section'
import BlogSection from './components/blog-section'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container">
          <div style={{ padding: '2rem 0' }}>
            <TerminalHero />
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <WiseWordsSection />
            <BlogSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}