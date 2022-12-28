import { Container, Stack, Typography, Button } from '@mui/material';

import { StyledStackWallpaper } from '../styled-components';

export function Welcome() {
  return (
    <StyledStackWallpaper>
      <Container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Stack color="white" maxWidth="650px">
          <Typography variant="h2" fontWeight="bold">
            Landing Page
          </Typography>
          <Typography variant="h4">Template design</Typography> <br />
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi eveniet maiores asperiores rem
            nulla porro non saepe. Esse alias incidunt aut earum recusandae similique rem ratione, cumque maxime
            reprehenderit.
          </Typography>
          <Stack justifyContent="start" alignItems="start" flexDirection="row" columnGap={2} mt={4}>
            <Button variant="contained" size="large">
              Get ready
            </Button>
            <Button variant="contained" size="large">
              About us
            </Button>
          </Stack>
        </Stack>
      </Container>
    </StyledStackWallpaper>
  );
}
