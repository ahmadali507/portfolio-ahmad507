// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import IntroductorySection from './components/IntroductorySection';
import BackgroundComponent from './components/BackgroundComponent';
import Section from './components/Section'; 
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  let name = "Ahmad Ali SHAHID.";
  name = name.toUpperCase(); 

  return (
    <>
      <Navbar />
      <Menu />
      <BackgroundComponent id="home" />
      <IntroductorySection name={name} id="details" />
      <Section id="projects" />
      <Skills id="kill" />
      <Footer id="contact" />
    </>
  );
}
