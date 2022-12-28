import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

export function SimpleCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent sx={{ borderColor: 'white' }}>
        <Typography gutterBottom variant="h5" component="div">
          Lorem
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, provident voluptates? Nesciunt laborum veniam
          nihil a doloremque id. Ut maxime unde eligendi. Asperiores eaque, dolor eveniet modi blanditiis recusandae
          illo?
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text">Share</Button>
        <Button>Learn More</Button>
      </CardActions>
    </Card>
  );
}
