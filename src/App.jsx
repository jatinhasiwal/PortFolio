import React from 'react'
import Navbar from './containers/Navbar'
import Home from './containers/Home'
import About from './containers/About'
import Skills from './containers/Skills'
import Projects from './containers/Projects'
import Contact from './containers/Contact'
import Footer from './containers/Footer'
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
    <div>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </div>
    <Toaster />
    </>
  )
}

export default App