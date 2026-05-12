import { Education, Experience, Footer, Intro, Skills } from './components';
import { EDUCATION_ENTRIES, EXPERIENCE_ENTRIES, SKILLS_CATEGORIES } from './config';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] font-sans selection:bg-[#F59E0B] selection:text-black">
      <Intro />
      <Skills categories={SKILLS_CATEGORIES} />
      <Experience experienceEntries={EXPERIENCE_ENTRIES} />
      <Education educationEntries={EDUCATION_ENTRIES} />
      <Footer />
    </div>
  );
}
