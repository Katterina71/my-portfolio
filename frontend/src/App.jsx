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
    {/* // <Router>
    //   <Routes>
    //     <Route path="/" exact element={<Layout><Main/></Layout>}/> */}
        <Layout><Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    
        {/* </Routes>
    </Router> */}
    </Layout>
    </Box>
  )
}

export default App
