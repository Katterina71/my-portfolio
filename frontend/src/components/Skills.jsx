import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const skills = [
  { title: 'UX/UI design', description: 'I’ve been working with websites since 2010...' },
  { title: 'SEO / PPC', description: 'Raising sites to the top 10 in organic search results...' },
  { title: 'Research / Analysis', description: 'Conducting research on the usability of the site...' },
  { title: 'Strategy / Planning', description: 'Creating strategies and considering advertising campaigns...' },
  { title: 'HTML / CSS', description: 'HTML / CSS. Create sites in website builders...' },
  { title: 'Picture / Icon Design', description: 'Creating pictures and icons in Adobe Illustrator...' }
];

const Skills = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" gutterBottom>
        My skills
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill) => (
          <Grid item xs={12} md={4} key={skill.title}>
            <Card>
              <CardContent>
                <Typography variant="h6">{skill.title}</Typography>
                <Typography variant="body2">{skill.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
