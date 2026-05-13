import { Education, Experience, Footer, Header, Intro, ScrollProgress, Skills } from './components';
import { EDUCATION_ENTRIES, EXPERIENCE_ENTRIES, SKILLS_CATEGORIES } from './data';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-foreground font-sans selection:bg-accent selection:text-black">
      <ScrollProgress />
      <Header />
      <Intro />
      <Skills categories={SKILLS_CATEGORIES} />
      <Experience experienceEntries={EXPERIENCE_ENTRIES} />
      <Education educationEntries={EDUCATION_ENTRIES} />
      <Footer />
    </div>
  );
}
