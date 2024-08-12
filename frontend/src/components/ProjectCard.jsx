import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Button, Box, Grid, Chip } from '@mui/material';
import { OpenInNew, GitHub } from '@mui/icons-material';

const ProjectCard = ({ name, description, techIcons, projectLink, githubLink, gifSrc }) => {
  return (
    <Card sx={{ display: 'flex', mb: 4, borderRadius: '8px', boxShadow: 3, backgroundColor: '#353D54'}}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 3 }}>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', pb: 2 }}>
              {name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {description}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {techIcons && techIcons.map((icon, index) => (
                <Chip key={index} icon={icon.icon} label={icon.label} />
              ))}
            </Box>
            <Box>
              <Button
                variant="contained"
                color="primary"
                href={projectLink}
                sx={{ mr: 2, backgroundColor: '#FF077E', '&:hover': { backgroundColor: '#37FFF0' }, mb: { xs: 2, sm: 2 }}}
                startIcon={<OpenInNew />}
              >
                View Project
              </Button>
              <Button
                variant="outlined"
                href={githubLink}
                sx={{ borderColor: '#FF077E', color: '#FF077E', '&:hover': { borderColor: '#37FFF0', color: '#37FFF0' } }}
                startIcon={<GitHub />}
              >
                View on GitHub
              </Button>
            </Box>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={gifSrc}
            alt={`${name} GIF`}
            sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0 8px 8px 0' }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techIcons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  projectLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  gifSrc: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
  techIcons: [],
};

export default ProjectCard;
