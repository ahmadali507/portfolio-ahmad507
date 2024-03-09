import React from 'react'
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import IntroductorySection from './components/IntroductorySection';
import BackgroundComponent from './components/BackgroundComponent';
import Section from './components/Section'; 
import Skills from './components/Skills';
import Footer from './components/Footer';
export default function App(){
  // creating a variable that will contain the name of the person owning hte website. 
  let name = "Ahmad Ali SHAHID."
  name = name.toUpperCase(); 

  
  
  return (
    <>
    <Navbar/>
    <Menu/>
    <BackgroundComponent/>
    <IntroductorySection name = {name}/>
    <Section></Section>
    <Skills></Skills>
    <Footer></Footer>
   
    </>
  );
}