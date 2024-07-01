import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/navigate/Header"
import Layout from "./layout/Layout"
import Main from './main/Main';


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Layout><Main/></Layout>}/>
        </Routes>
    </Router>
  )
}

export default App
