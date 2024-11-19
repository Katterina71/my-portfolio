import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';

import Layout from "./layout/Layout"
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ExperienceBlock from './components/ExperienceBlock';


function App() {
  

  return (
    <Box>
     <Layout>
        <Hero/>
        <ExperienceBlock/>
        <About/>
        <Projects/>
        {/* <Skills/> */}
        <Contact/>
     </Layout>
    </Box>
  )
}

export default App
