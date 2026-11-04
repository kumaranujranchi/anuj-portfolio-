import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark';
  });

  const [accent, setAccent] = useState(() => {
    return localStorage.getItem('portfolio_accent') || 'lime';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('portfolio_accent', accent);
    document.documentElement.setAttribute('data-accent', accent);
  }, [accent]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleAccent = () => {
    setAccent(prev => (prev === 'lime' ? 'blue' : 'lime'));
  };

  const themeClass = `${theme === 'light' ? 't-light' : 't-dark'} ${accent === 'blue' ? 'a-blue' : 'a-lime'}`;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, accent, setAccent, toggleTheme, toggleAccent, themeClass }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

