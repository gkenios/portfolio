import { Education, Experience, Footer, Header, Intro, ScrollProgress, Skills } from './components';
import { EDUCATION_ENTRIES, EXPERIENCE_ENTRIES, SKILLS_CATEGORIES } from './data';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-foreground font-sans selection:bg-accent selection:text-black">
      <ScrollProgress />
      <Header />
      <div id="intro" className="scroll-mt-20">
        <Intro />
      </div>
      <div id="skills" className="scroll-mt-20">
        <Skills categories={SKILLS_CATEGORIES} />
      </div>
      <div id="experience" className="scroll-mt-20">
        <Experience experienceEntries={EXPERIENCE_ENTRIES} />
      </div>
      <div id="education" className="scroll-mt-20">
        <Education educationEntries={EDUCATION_ENTRIES} />
      </div>
      <Footer />
    </div>
  );
}
