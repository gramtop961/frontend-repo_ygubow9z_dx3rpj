import Hero from './Hero';
import Stats from './Stats';
import ServicesPreview from './ServicesPreview';
import ProjectsPreview from './ProjectsPreview';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <ServicesPreview />
      <ProjectsPreview />
    </main>
  );
}
