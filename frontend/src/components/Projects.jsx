import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

// Example project data
const projects = [
  {
    name: 'Celestial Canvas',
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
    name: 'Fosters Connect',
    description: 'Project for outdoor advertising production.',
    techIcons: [
      { icon: <i className="fab fa-angular"></i>, label: 'Angular' },
      { icon: <i className="fab fa-python"></i>, label: 'Python' },
    ],
    projectLink: 'https://fosterconnect.onrender.com/',
    githubLink: 'https://github.com/Katterina71/FosterConnect',
    gifSrc: '/gifs/file.gif',
  },
  {
    name: 'Marvel Characters App',
    description: 'Project for outdoor advertising production.',
    techIcons: [
      { icon: <i className="fab fa-angular"></i>, label: 'Angular' },
      { icon: <i className="fab fa-python"></i>, label: 'Python' },
    ],
    projectLink: 'https://main--marvel-characters-vault.netlify.app/',
    githubLink: 'https://github.com/Katterina71/MarvelCharacterVault',
    gifSrc: '/gifs/marvel-vault.gif',
  },
  {
    name: 'Website Dune Universe',
    description: 'Project for outdoor advertising production.',
    techIcons: [
      { icon: <i className="fab fa-angular"></i>, label: 'Angular' },
      { icon: <i className="fab fa-python"></i>, label: 'Python' },
    ],
    projectLink: 'https://katterina71.github.io/Dune-Website/',
    githubLink: 'https://github.com/Katterina71/Dune-Website',
    gifSrc: '/gifs/file.gif',
  },
  {
    name: 'Fitness Routine Planner',
    description: 'Project for outdoor advertising production.',
    techIcons: [
      { icon: <i className="fab fa-angular"></i>, label: 'Angular' },
      { icon: <i className="fab fa-python"></i>, label: 'Python' },
    ],
    projectLink: 'https://katterina71.github.io/Fitness/',
    githubLink: 'https://github.com/Katterina71/Fitness',
    gifSrc: '/gifs/fitness-example.gif',
  },
  {
    name: 'Personal Finance Tracker',
    description: 'Project for outdoor advertising production.',
    techIcons: [
      { icon: <i className="fab fa-angular"></i>, label: 'Angular' },
      { icon: <i className="fab fa-python"></i>, label: 'Python' },
    ],
    projectLink: 'https://katterina71.github.io/Fitness/',
    githubLink: 'https://github.com/Katterina71/Personal-Finance-Tracker',
    gifSrc: '/gifs/file.gif',
  },
  {
    name: 'Mystery Room Finder',
    description: 'Project for outdoor advertising production.',
    techIcons: [
      { icon: <i className="fab fa-angular"></i>, label: 'Angular' },
      { icon: <i className="fab fa-python"></i>, label: 'Python' },
    ],
    projectLink: 'https://katterina71.github.io/Fitness/',
    githubLink: 'https://github.com/Katterina71/Mystery-Room-Finder',
    gifSrc: '/gifs/file.gif',
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
