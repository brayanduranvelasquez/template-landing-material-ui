import { Stack, Container, Grid, Typography, Button } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import { StyledFooter, StyledGrid, StyledTextField } from '../styled-components';

export function Footer() {
  return (
    <Stack sx={{ backgroundColor: '#1F172B' }}>
      <StyledFooter>
        <Container>
          <StyledGrid container>
            <Grid item xs={12} md={4} padding={2}>
              <Stack color="white">
                <Typography fontWeight="bold">About the company</Typography>

                <Stack mt={3}>
                  <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt excepturi fugiat inventore
                    obcaecati minus? Ducimus unde quisquam exercitationem, nostrum, ex.
                  </Typography>
                </Stack>

                <Stack flexDirection="row" columnGap={1.5} mt={3}>
                  <FacebookIcon sx={{ '&:hover': { cursor: 'pointer' } }} />
                  <InstagramIcon sx={{ '&:hover': { cursor: 'pointer' } }} />
                  <TwitterIcon sx={{ '&:hover': { cursor: 'pointer' } }} />
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={8} padding={2}>
              <Stack color="white" mb={2}>
                <Typography variant="h4">Subscribe</Typography>
                <Typography variant="h6">To know always about our services</Typography>
              </Stack>

              <Stack flexDirection="row" columnGap={2}>
                <StyledTextField placeholder="Email..." fullWidth />
                <Button variant="contained">Submit</Button>
              </Stack>
            </Grid>
          </StyledGrid>
        </Container>
      </StyledFooter>

      <Stack py={3} bgcolor="black" color="white" textAlign="center">
        2020 - All rights reserved
      </Stack>
    </Stack>
  );
}
