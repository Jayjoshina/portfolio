import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import About from './components/about/About';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Achievements from './components/achievements/Achievements';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f8f9fa;
    color: #333;
    line-height: 1.7;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  section {
    padding: 80px 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
