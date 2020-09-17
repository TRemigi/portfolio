import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ProjectsPage from './components/ProjectsPage';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  // set up navigation state
const [navSelected, setNavSelected] = useState("about");

// set document title to selected navigation
useEffect(() => {
  const newTitle = navSelected.charAt(0).toUpperCase() + navSelected.slice(1)
  document.title = newTitle;
}, [navSelected]);

// conditionally render pages
const renderPage = () => {
    
  switch(navSelected) {
    case 'home':
      return <Home />;
    case 'about':
      return <About
      navSelected={navSelected} />;
    case 'portfolio':
      return <ProjectsPage
      navSelected={navSelected} />;
      case 'contact':
      return <Contact
      navSelected={navSelected} />;
      case 'resume':
        return <Resume
        navSelected={navSelected} />;
    default:
      return <About
      navSelected={navSelected} />;
  }
}

  return (
    <div className="back-dark">
      <Header 
      navSelected={navSelected}
      setNavSelected={setNavSelected}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
