import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';

import Header from "./components/navigate/Header"
import Layout from "./layout/Layout"
import Main from './main/Main';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/navigate/Footer';


function App() {
  

  return (
    <Box>
     <Layout>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
     </Layout>
    </Box>
  )
}

export default App
