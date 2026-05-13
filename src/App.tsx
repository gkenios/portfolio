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

const NAV_ITEMS = {
  intro: 'Intro',
  skills: 'Technical Skills',
  experience: 'Experience',
  education: 'Education',
  about: 'About',
};

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-foreground font-sans selection:bg-accent selection:text-black">
      <ScrollProgress />
      <Header titleMapping={NAV_ITEMS} />
      <Intro />
      <Section id="skills" label={NAV_ITEMS.skills} title="What I work with." subtle>
        <Skills categories={SKILLS_CATEGORIES} />
      </Section>
      <Section id="experience" label={NAV_ITEMS.experience} title="Where I've worked.">
        <Experience experienceEntries={EXPERIENCE_ENTRIES} />
      </Section>
      <Section id="education" label={NAV_ITEMS.education} title="Academic background." subtle>
        <Education educationEntries={EDUCATION_ENTRIES} />
      </Section>
      <Section id="about" label={NAV_ITEMS.about} title="A bit more personal.">
        <About />
      </Section>
      <Footer subtle />
    </div>
  );
}
