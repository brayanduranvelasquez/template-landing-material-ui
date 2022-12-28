import styled from '@emotion/styled';
import { Grid, Stack, TextField } from '@mui/material';

// Local
import backgroundImg from '../assets/background.jpg';

const StyledStackWallpaper = styled(Stack)(({ theme }: any) => ({
  justifyContent: 'center',
  alignItems: 'end',
  width: '100%',
  height: '100vh',
  maxHeight: '700px',
  background: `url(${backgroundImg}) no-repeat`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  [theme.breakpoints.down('md')]: {
    backgroundPosition: 'right',
  },
}));

const StyledGrid = styled(Grid)({
  width: '100%',
  padding: 10,
});

const StyledGridItem = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 15,
  marginBottom: 15,
});

const StyledTextField = styled(TextField)({
  background: 'white',
  borderRadius: 5,
});

const StyledFooter = styled(Stack)(({ theme }: any) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: 75,

  [theme.breakpoints.down('md')]: {
    padding: 25,
  },
}));

export { StyledStackWallpaper, StyledGrid, StyledGridItem, StyledTextField, StyledFooter };
