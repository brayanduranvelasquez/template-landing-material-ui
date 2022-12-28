import { Stack } from '@mui/material';

import { Footer } from './components/Footer';
import { NewsSection } from './components/NewsSection';
import { Welcome } from './components/Welcome';

export default function HomePage() {
  return (
    <Stack bgcolor="#1F172B">
      <Welcome />
      <NewsSection />
      <Footer />
    </Stack>
  );
}
