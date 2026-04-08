import React, { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Journey from './components/Journey.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { PROFILE } from './content/profile.js';
import './App.css';

const THEME_KEY = 'portfolio_theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const saved = window.localStorage.getItem(THEME_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const navigation = useMemo(
    () => [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'journey', label: 'Journey' },
      { id: 'resume', label: 'Resume' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  );

  return (
    <div className="appRoot">
      <a className="skipLink" href="#content">
        Skip to content
      </a>

      <Header
        name={PROFILE.name}
        avatar={PROFILE.avatar}
        navigation={navigation}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      />

      <main id="content" className="appMain">
        <Hero profile={PROFILE} />
        <About profile={PROFILE} />
        <Services profile={PROFILE} />
        <Skills profile={PROFILE} />
        <Projects profile={PROFILE} />
        <Journey profile={PROFILE} />
        <Resume profile={PROFILE} />
        <Contact profile={PROFILE} />
      </main>

      <Footer profile={PROFILE} navigation={navigation} />
    </div>
  );
}

export default App;


