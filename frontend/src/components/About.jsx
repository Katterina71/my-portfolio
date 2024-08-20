import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';



const About = () => {
  return (
    <section id="about-me">
    <Container sx={{ mt: 16, mb: 12, px: 4, py: 4, position: 'relative' }}>
      {/* Bubbles image as background */}
      <Box
        component="img"
        src="/accents/bubbles-two.png"
        alt="Decorative bubbles"
        sx={{
          position: 'absolute',
          top: '-300px',
          left: '800px',
          width: { xs: '100%', sm: '50%' }, // 100% width on mobile, 50% on small screens and up
          height: 'auto',
          zIndex: 0,
          opacity: 0.5,
          pointerEvents: 'none',
          display: { xs: 'none', sm: 'block' }, // Hide on extra-small screens
        }}
      />
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          position: 'relative',
          zIndex: 1,
          fontSize: { xs: '2.5rem', sm: '2.5rem', md: '3.5rem' },
        }}
      >
        About me
      </Typography>
      <Typography variant="body1" paragraph >
        I'm a Full-Stack Software Engineer with over 10 years of experience working with websites across various industries, including medical, finance, and e-commerce. My expertise lies in creating efficient, scalable solutions using modern technologies. I work with React, Node.js, Express, and MongoDB to develop dynamic, responsive web applications.
      </Typography>
      <Typography variant="body1" paragraph >
      My adaptability is a key strength that reassures potential clients or employers about my ability to handle future challenges. I have a strong foundation in HTML, CSS, JavaScript, and RESTful APIs, which I use to create user-friendly interfaces and robust back-end systems. I leverage modern libraries and frameworks like React, Material-UI, Tailwind CSS, and Bootstrap to build scalable, efficient, and visually appealing solutions. I am committed to continuous learning, always exploring new technologies and updating my skills to ensure that the solutions I create today are adaptable to tomorrow's challenges.
      </Typography>
      <Typography variant="body1" paragraph >
      I’m skilled in optimizing websites for performance and SEO, ensuring they meet industry standards and provide a great user experience. I focus on writing clean, efficient code that is easy to maintain and scales well, ensuring that my applications perform reliably and meet business goals.
      </Typography>
      <Typography variant="body1" >
        If you're looking for a skilled engineer to bring your next project to life, let's connect and make it happen.
      </Typography>
      <Box sx={{mt:4}}>
      <Button
                variant="contained"
                color="primary"
                href='#contact'
                sx={{
                  mr: 2,
                  backgroundColor: '#FF077E',
                  '&:hover': { backgroundColor: '#37FFF0' },
                  // mb: { xs: 2, md: 0 }, // Margin-bottom only on mobile, no margin on desktop
                }}
                startIcon={<ForwardToInboxIcon />}
              >
                Contact with me
              </Button>
      <Button
                variant="outlined"
                href="/resume/EKATERINA_ILIUSHKINA-Software_Engineer.pdf" // Link to the resume file in the public folder
                download // This triggers the download of the file
                sx={{ borderColor: '#FF077E', color: '#FF077E', '&:hover': { borderColor: '#37FFF0', color: '#37FFF0' } }}
                startIcon={<GetAppIcon />}
              >
                My Resume
              </Button>
              </Box>
    </Container>
    </section>
  );
};

export default About;
