import {
  About,
  Education,
  Experience,
  Footer,
  Header,
  Intro,
  Section,
  ScrollProgress,
  Skills,
} from './components';
import { EDUCATION_ENTRIES, EXPERIENCE_ENTRIES, SKILLS_CATEGORIES } from './data';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-foreground font-sans selection:bg-accent selection:text-black">
      <ScrollProgress />
      <Header />
      <Intro />
      <Section id="skills" label='Technical Skills' title='What I work with.' subtle>
        <Skills categories={SKILLS_CATEGORIES} />
      </Section>
      <Section id="experience" label='Experience' title="Where I've worked.">
        <Experience experienceEntries={EXPERIENCE_ENTRIES} />
      </Section>
      <Section id="education" label='Education' title='Academic background.' subtle>
        <Education educationEntries={EDUCATION_ENTRIES} />
      </Section>
      <Section id="about" label='About' title='A bit more personal.'>
        <About />
      </Section>
      <Footer subtle />
    </div>
  );
}
