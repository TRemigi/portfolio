import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
const [navSelected, setNavSelected] = useState("home");

const renderPage = () => {
    
  switch(navSelected) {
    case 'home':
      return <Home />;
    case 'about':
      return <About />;
    case 'projects':
      return <Projects />;
      case 'contact':
      return <Contact />;
    default:
      return <Home />;
  }
}

  return (
    <div className="back-dark">
      <Nav 
      navSelected={navSelected}
      setNavSelected={setNavSelected}
      />
      <main>
        {renderPage()}
      </main>

    </div>
  );
}

export default App;
