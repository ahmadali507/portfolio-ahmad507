// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
// import IntroductorySection from './components/IntroductorySection';
import BackgroundComponent from './components/BackgroundComponent';
import Section from './components/Section'; 
import Skills from './components/Skills';
import Footer from './components/Footer';
import { Suspense, lazy } from 'react';
import Projects from './components/Projects';

const IntroductorySection = lazy(() => import('./components/IntroductorySection'));

export default function App() {
  let name = "Ahmad Ali SHAHID.";
  name = name.toUpperCase(); 

  return (
    <>
      <Navbar />
      <Menu />
      <BackgroundComponent  />
      <Suspense fallback={<div style={{textAlign : 'center'}}>LOADING ________</div>}>
        <IntroductorySection name={name}  />
      </Suspense>
      <Section  />
      <Skills />
      <Projects/>
      <Footer  />
    </>
  );
}
