import { Stack, Container, Typography } from '@mui/material';

import { StyledGrid, StyledGridItem } from '../styled-components';
import { SimpleCard } from './Card';

export function NewsSection() {
  return (
    <Stack py={10} sx={{ backgroundColor: '#1F172B' }}>
      <Container>
        <Stack sx={{ color: 'white' }} mb={3}>
          <Typography variant="h4">Last articles you can read...</Typography>
        </Stack>

        <StyledGrid container>
          <StyledGridItem item xs={12} md={6} lg={4}>
            <SimpleCard />
          </StyledGridItem>
          <StyledGridItem item xs={12} md={6} lg={4}>
            <SimpleCard />
          </StyledGridItem>
          <StyledGridItem item xs={12} md={6} lg={4}>
            <SimpleCard />
          </StyledGridItem>
          <StyledGridItem item xs={12} md={6} lg={4}>
            <SimpleCard />
          </StyledGridItem>
          <StyledGridItem item xs={12} md={6} lg={4}>
            <SimpleCard />
          </StyledGridItem>
          <StyledGridItem item xs={12} md={6} lg={4}>
            <SimpleCard />
          </StyledGridItem>
        </StyledGrid>
      </Container>
    </Stack>
  );
}
