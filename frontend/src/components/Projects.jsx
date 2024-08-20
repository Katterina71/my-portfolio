import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

// Example project data
const projects = [
  {
    name: 'Celestial Canvas',
    description: '"Discover the Wonders of the Universe in Real Time" is a responsive web application that brings the cosmos closer to users through real-time data fetched from NASA and Astronomy APIs. The project utilizes Bootstrap for its UI framework, ensuring a seamless and engaging experience across different devices. Using modern JavaScript, including ES6+ and asynchronous programming, the app provides daily images of celestial events from NASA\'s EPIC and Astronomy Picture of the Day, along with live updates on moon phases and planetary positions. This project aims to educate about cosmic phenomena while demonstrating advanced JavaScript techniques and responsive design with Bootstrap.',
    techIcons: [
      { icon: <i className="fab fa-js"></i>, label: 'Java Script' },
      { icon: <i className="fab fa-bootstrap"></i>, label: 'Bootstrap' },
      { icon: <i className="fab"></i>, label: 'RESTful API' },
      { icon: <i className="fab"></i>, label: 'Fetch API' },
      { icon: <i className="fab fa-github"></i>, label: 'GitHub' },
     
    ],
    projectLink: 'https://katterina71.github.io/Celestial-Canvas/',
    githubLink: 'https://github.com/Katterina71/Celestial-Canvas',
    gifSrc: '/gifs/celectial.gif',
  },
  {
    name: 'Fosters Connect',
    description: '"Fosters Connect" is a web-based platform designed to streamline the fostering process for animal shelters and potential foster caregivers using the MERN stack (MongoDB, Express.js, React, and Node.js). The site features a user-friendly interface created with Material-UI (MUI) and ensures secure user authentication through Firebase. It efficiently manages pet image uploads with Cloudinary and automates communications using SendGrid. The application aims to simplify foster care coordination, enhance animal welfare by reducing shelter overcrowding, and increase awareness and participation in foster care.',
    techIcons: [
      { icon: <i className="fab fa-js"></i>, label: 'JavaScript' },
      { icon: <i className="fab"></i>, label: 'NoSQL' },
      { icon: <i className="fa-light fa-database"></i>, label: 'MongoDB' },
      { icon: <i className="fa-light fa-database"></i>, label: 'Mongoose' },
      { icon: <i className="fa-light fa-code-branch"></i>, label: 'Express JS' },
      { icon: <i className="fab"></i>, label: 'RESTful API' },
      { icon: <i className="fab fa-node-js"></i>, label: 'Node.js' },
      { icon: <i className="fab fa-react"></i>, label: 'React' },
      { icon: <i className=""></i>, label: 'MUI' },
      { icon: <i className="fab fa-code-merge"></i>, label: 'Firebase' },
      { icon: <i className="fab fa-github"></i>, label: 'GitHub' },

 
   
    ],
    projectLink: 'https://fosterconnect.onrender.com/',
    githubLink: 'https://github.com/Katterina71/FosterConnect',
    gifSrc: '/gifs/foster-connect.gif',
  },
  {
    name: 'Marvel Characters App',
    description: 'The Marvel Characters App is a React-based web application that offers an interactive platform for users to explore Marvel characters. It employs React Router for navigation, Axios for API requests to the Marvel database, and CryptoJS for secure API interactions. The app features a component-based architecture with state management using the useReducer hook and useContext. Users can save their favorite characters using localStorage, ensuring data persistence. The application aims to provide an engaging user experience while managing challenges like API rate limits and ensuring mobile responsiveness.',
    techIcons: [
      { icon: <i className="fab fa-react"></i>, label: 'React' },
      { icon: <i className="fab fa-js"></i>, label: 'JavaScript' },
      { icon: <i className="fab"></i>, label: 'RESTful API' },
      { icon: <i className="fab"></i>, label: 'Axios' },
      { icon: <i className="fab fa-css3-alt"></i>, label: 'CSS' },
      { icon: <i className="fab fa-github"></i>, label: 'GitHub' },
    ],
    projectLink: 'https://main--marvel-characters-vault.netlify.app/',
    githubLink: 'https://github.com/Katterina71/MarvelCharacterVault',
    gifSrc: '/gifs/marvel-vault.gif',
  },
  {
    name: 'Website Dune Universe',
    description: 'The Dune Portal Website is a comprehensive digital platform dedicated to the universe of Frank Herbert\'s Dune. This website was developed using HTML, CSS, and Bootstrap to ensure a responsive design that adapts to various devices. The portal provides detailed explorations of Dune’s books, movies, and the author, offering features like a dynamic content layout, user registration, and newsletter subscriptions. Key interactive elements include CSS animations for a "Spice Melange" glow effect and scalable media icons. The project’s primary goal was to deepen the understanding and application of web development technologies, focusing on creating a user-friendly and engaging experience.',
    techIcons: [
      { icon: <i className="fab fa-bootstrap"></i>, label: 'Bootstrap' },
      { icon: <i className="fab fa-css3-alt"></i>, label: 'CSS' },
      { icon: <i className="fab fa-html5"></i>, label: 'HTML' },
      { icon: <i className="fab fa-github"></i>, label: 'GitHub' },

    ],
    projectLink: 'https://katterina71.github.io/Dune-Website/',
    githubLink: 'https://github.com/Katterina71/Dune-Website',
    gifSrc: '/gifs/dune-website.gif',
  },
  {
    name: 'Fitness Routine Planner',
    description: 'The Fitness Routine Planner is a web-based application designed to help users organize and manage their weekly fitness activities. It leverages the Document Object Model (DOM) and Browser Object Model (BOM) to offer a dynamic user experience, enabling real-time interaction through DOM events. Users can input, view, and print their fitness schedules, with features like form validation and interactive interface enhancing usability. Developed using HTML5, CSS3, and JavaScript, this planner exemplifies event-driven programming and is aimed at providing a user-friendly tool for effective fitness management.',
    techIcons: [
      { icon: <i className="fab fa-js"></i>, label: 'JavaScript' },
      { icon: <i className="fab fa-css3-alt"></i>, label: 'CSS' },
      { icon: <i className="fab fa-html5"></i>, label: 'HTML' },
      { icon: <i className="fab"></i>, label: 'DOM' },
      { icon: <i className="fab"></i>, label: 'BOM' },
      { icon: <i className="fab"></i>, label: 'OOP' },
      { icon: <i className="fab fa-github"></i>, label: 'GitHub' },
    ],
    projectLink: 'https://katterina71.github.io/Fitness/',
    githubLink: 'https://github.com/Katterina71/Fitness',
    gifSrc: '/gifs/fitness-example.gif',
  },
  {
    name: 'Personal Finance Tracker',
    description: 'The Personal Finance Tracker is a web application tailored to simplify personal finance management. Utilizing Node.js and Express, it provides a platform for users to monitor transactions, manage accounts, and categorize spending. The app employs EJS for server-side rendering, displaying dynamic financial data interactively. Key features include a RESTful API for CRUD operations on transactions and categories, custom Express middleware for enhanced request handling, and automatic monthly balance updates. This tool is designed for anyone looking to take control of their financial health through effective tracking and categorization of their spending.',
    techIcons: [
      { icon: <i className="fab fa-js"></i>, label: 'JavaScript' },
      { icon: <i className="fab fa-node-js"></i>, label: 'Node.js' },
      { icon: <i className="fab fa-node-js"></i>, label: 'Express JS' },
      { icon: <i className="fab"></i>, label: 'RESTful API' },
      { icon: <i className="fab"></i>, label: 'DOM' },
      { icon: <i className="fab"></i>, label: 'OOP' },
      { icon: <i className="fab fa-github"></i>, label: 'GitHub' },

    ],
    githubLink: 'https://github.com/Katterina71/Personal-Finance-Tracker',
    gifSrc: '/projects-img/finance-tracker.png',
  },
  {
    name: 'Mystery Room Finder',
    description: 'Mystery Room Finder Game: Dive into an engaging, mystery-themed gaming experience with the Mystery Room Finder! Built using JavaScript, HTML, and CSS, this web application invites players to navigate various themed rooms, each filled with hidden items to discover. Utilizing object-oriented programming, the game creates dynamic rooms and tracks player progress, including item discoveries and time taken per item, enhancing the interactive gameplay. Key features include real-time item searches, score calculations based on speed, and immersive visual elements from custom images. Perfect for puzzle enthusiasts looking to test their quick-thinking and observation skills!',
    techIcons: [
      { icon: <i className="fab fa-js"></i>, label: 'JavaScript' },
      { icon: <i className="fab fa-node-js"></i>, label: 'Node.js' },
      { icon: <i className="fab fa-node-js"></i>, label: 'Express JS' },
      { icon: <i className="fab fa-css3-alt"></i>, label: 'CSS' },
      { icon: <i className="fab fa-html5"></i>, label: 'HTML' },
      { icon: <i className="fab"></i>, label: 'DOM' },
      { icon: <i className="fab"></i>, label: 'OOP' },
      { icon: <i className="fab fa-github"></i>, label: 'GitHub' },
   
    ],
    projectLink: 'https://htmlpreview.github.io/?https://github.com/Katterina71/Mystery-Room-Finder/blob/main/index.html',
    githubLink: 'https://github.com/Katterina71/Mystery-Room-Finder',
    gifSrc: '/projects-img/mystery-room.png',
  },
  // {
  //   name: 'Health Journal',
  //   description: 'The Health Journal is a robust server application designed for personal health management, built using Node.js, Express, and MongoDB. This application features a backend API that supports comprehensive CRUD operations, enabling users to manage profiles, sleep logs, and other health data efficiently. Key features include data validation for integrity, and optimized queries using MongoDB indexes to enhance performance. It is tailored for users looking to systematically track their health metrics through a reliable and scalable digital platform, ensuring data consistency and quick access.',
  //   techIcons: [
  //     { icon: <i className="fab fa-angular"></i>, label: 'Angular' },
  //     { icon: <i className="fab fa-python"></i>, label: 'Python' },
  //   ],
  //   projectLink: 'https://htmlpreview.github.io/?https://github.com/Katterina71/Mystery-Room-Finder/blob/main/index.html',
  //   githubLink: 'https://github.com/Katterina71/Health-Journal,
  //   gifSrc: '/gifs/file.gif',
  // },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects">
    <Container sx={{ py: 10 }}>
      <Typography variant="h2" gutterBottom sx={{mb:4, fontSize: { xs: '2.5rem', sm: '2.5rem', md: '3.5rem' }}}>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} key={index} sx={{mt:6}}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </section>
  );
};

export default Projects;
