import { Education, Experience, Footer, Intro, Skills } from './components';
import { EDUCATION_ENTRIES, EXPERIENCE_ENTRIES } from './config';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] font-sans selection:bg-blue-500 selection:text-white">
      <Intro />
      <Skills />
      <Experience experienceEntries={EXPERIENCE_ENTRIES} />
      <Education educationEntries={EDUCATION_ENTRIES} />
      <Footer />
    </div>
  );
}