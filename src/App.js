import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
const [navSelected, setNavSelected] = useState("about");

useEffect(() => {
  const newTitle = navSelected.charAt(0).toUpperCase() + navSelected.slice(1)
  document.title = newTitle;
}, [navSelected]);

const renderPage = () => {
    
  switch(navSelected) {
    case 'home':
      return <Home />;
    case 'about':
      return <About
      navSelected={navSelected} />;
    case 'projects':
      return <Projects
      navSelected={navSelected} />;
      case 'contact':
      return <Contact
      navSelected={navSelected} />;
    default:
      return <About />;
  }
}

  return (
    <div className="back-dark">
      <NavComponent 
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
