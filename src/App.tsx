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
import {
  ABOUT,
  CONTACT_DETAILS,
  CV_URL,
  EDUCATION_ENTRIES,
  EXPERIENCE_ENTRIES,
  FULL_NAME,
  HOBBIES,
  ROLE,
  SECTIONS,
  SKILLS_CATEGORIES,
} from './data';
import { useTheme } from './lib/useTheme';

const theme = 'dark'; // 'light' | 'dark' | 'system'
const allSections = Object.values(SECTIONS).map((section) => section.title);

export default function App() {
  const { isDark, toggle } = useTheme(theme);

  return (
    <div className="min-h-screen bg-bg text-foreground font-sans selection:bg-accent selection:text-black">
      <ScrollProgress />
      <Header sections={allSections} isDark={isDark} onToggleTheme={toggle} />

      <main>
        <Intro
          fullName={FULL_NAME}
          role={ROLE}
          about={ABOUT}
          cvUrl={CV_URL}
          contactDetails={CONTACT_DETAILS}
        />

        <Section title={SECTIONS.SKILLS.title} description={SECTIONS.SKILLS.description} subtle>
          <Skills categories={SKILLS_CATEGORIES} />
        </Section>

        <Section title={SECTIONS.EXPERIENCE.title} description={SECTIONS.EXPERIENCE.description}>
          <Experience experienceEntries={EXPERIENCE_ENTRIES} />
        </Section>

        <Section
          title={SECTIONS.EDUCATION.title}
          description={SECTIONS.EDUCATION.description}
          subtle
        >
          <Education educationEntries={EDUCATION_ENTRIES} />
        </Section>

        <Section title={SECTIONS.HOBBIES.title} description={SECTIONS.HOBBIES.description}>
          <Hobbies hobbies={HOBBIES} />
        </Section>
      </main>

      <Footer fullName={FULL_NAME} contactDetails={CONTACT_DETAILS} subtle />
    </div>
  );
}
