import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

// Example project data
const projects = [
  {
    name: 'Demonstration equipment',
    description: 'A project demonstrating various equipment.',
    techIcons: [
      { icon: <i className="fab fa-react"></i>, label: 'React' },
      { icon: <i className="fab fa-node-js"></i>, label: 'Node.js' },
    ],
    projectLink: 'https://example.com/demo-equipment',
    githubLink: 'https://github.com/example/demo-equipment',
    gifSrc: '/gifs/celectial.gif',
  },
  {
    name: 'Production of outdoor advertising',
    description: 'Project for outdoor advertising production.',
    techIcons: [
      { icon: <i className="fab fa-angular"></i>, label: 'Angular' },
      { icon: <i className="fab fa-python"></i>, label: 'Python' },
    ],
    projectLink: 'https://example.com/outdoor-advertising',
    githubLink: 'https://github.com/example/outdoor-advertising',
    gifSrc: '/gifs/outdoor-advertising.gif',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" gutterBottom sx={{mb:4}}>
        My projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
