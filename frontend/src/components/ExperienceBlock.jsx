import React, { useRef } from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import { motion, useInView } from 'framer-motion';

const data = [
  { years: "12 years", skills: "SEO performance, Digital Marketing, Strategy, Audits, Research" },
  { years: "7 years", skills: "Project Management, Client Collaboration, Team Leadership" },
  { years: "5 years", skills: "Web Development, UX/UI Design, CMS expertise (WordPress)" },
  { years: "1 year", skills: "Software Development, MERN Stack, APIs, Databases" }

];

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2, // Stagger animations for each block
      duration: 0.5,
    },
  }),
};

const ExperienceBlock = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <Container sx={{ mt: 20}} ref={ref}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.map((experience, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Animate only when in view
              variants={animationVariants}
              custom={index}
            >
              <Box
                sx={{
                  background: 'linear-gradient(90deg, #2295B3 0%, #42459A 100%)',
                  textAlign: 'center',
                  padding: 4,
                  borderRadius: 1,
                  minHeight: '180px'
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {experience.years}
                </Typography>
                <Typography variant="body2" sx={{fontSize:'16px'}}>{experience.skills}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ExperienceBlock;
