import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'education':
        return <Education />;
      case 'projects':
        return <Project />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header setActiveSection={setActiveSection} activeSection={activeSection} />
      {renderActiveSection()}
    </div>
  );
};

export default App;
