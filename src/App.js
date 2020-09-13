import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

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

const checkFooter = () => {
   
  switch(navSelected) {
    case 'home':
      return;
    default:
      return <Footer />;
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
      {checkFooter()}
    </div>
  );
}

export default App;
