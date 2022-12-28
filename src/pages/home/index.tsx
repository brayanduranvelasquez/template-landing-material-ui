import { Footer } from './components/Footer';
import { NewsSection } from './components/NewsSection';
import { Welcome } from './components/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <NewsSection />
      <Footer />
    </>
  );
}
