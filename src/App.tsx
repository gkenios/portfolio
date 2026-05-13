import {
  Education,
  Experience,
  Footer,
  Header,
  Hobbies,
  Intro,
  Section,
  ScrollProgress,
  Skills,
} from './components';
import { EDUCATION_ENTRIES, EXPERIENCE_ENTRIES, SKILLS_CATEGORIES } from './data';

const NAV_ITEMS = {
  intro: 'Intro',
  skills: 'Skills',
  experience: 'Experience',
  education: 'Education',
  hobbies: 'Hobbies',
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

      <Section id="education" label={NAV_ITEMS.education} title="My studies." subtle>
        <Education educationEntries={EDUCATION_ENTRIES} />
      </Section>

      <Section id="hobbies" label={NAV_ITEMS.hobbies} title="In my free time.">
        <Hobbies />
      </Section>

      <Footer subtle />
    </div>
  );
}
