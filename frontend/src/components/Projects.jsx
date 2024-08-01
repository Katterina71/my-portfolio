import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const projects = [
  { title: 'Demonstration equipment', image: 'path-to-image.jpg' },
  { title: 'Production of outdoor advertising', image: 'path-to-image.jpg' },
  { title: 'Promo DJI Inspire 2', image: 'path-to-image.jpg' },
  { title: 'Promo cosmetic goods', image: 'path-to-image.jpg' },
  { title: 'Construction and repair of buildings', image: 'path-to-image.jpg' },
  { title: 'Service for self-storage', image: 'path-to-image.jpg' }
];

const Projects = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" gutterBottom>
        My projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={4} key={project.title}>
            <Card>
              <CardMedia component="img" height="140" image={project.image} alt={project.title} />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
