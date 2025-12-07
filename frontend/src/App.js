import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Projects from './pages/Projects';
import ContactUs from './pages/ContactUs';

const AppContent = () => {
  const { darkMode } = React.useContext(ThemeContext);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1a2b4a',
        light: '#2d4373',
        dark: '#0d1829',
      },
      secondary: {
        main: '#c0c0c0',
        light: '#e8e8e8',
        dark: '#808080',
      },
      background: {
        default: darkMode ? '#0d1117' : '#f5f7fa',
        paper: darkMode ? '#1a1f2e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Poppins", "Montserrat", "Roboto", "Arial", sans-serif',
    },
  });

  return React.createElement(
    MuiThemeProvider,
    { theme },
    React.createElement(CssBaseline),
    React.createElement(
      Router,
      null,
      React.createElement(
        'div',
        { className: 'app-container', style: { minHeight: '100vh', display: 'flex', flexDirection: 'column', margin: 0, padding: 0 } },
        React.createElement(Header),
        React.createElement(
          'main',
          { className: 'main-content', style: { flex: 1 } },
          React.createElement(
            Routes,
            null,
            React.createElement(Route, { path: '/', element: React.createElement(Home) }),
            React.createElement(Route, { path: '/about', element: React.createElement(About) }),
            React.createElement(Route, { path: '/services', element: React.createElement(Services) }),
            React.createElement(Route, { path: '/products', element: React.createElement(Products) }),
            React.createElement(Route, { path: '/projects', element: React.createElement(Projects) }),
            React.createElement(Route, { path: '/contact', element: React.createElement(ContactUs) })
          )
        ),
        React.createElement(Footer)
      )
    )
  );
};

const App = () => {
  return React.createElement(
    ThemeProvider,
    null,
    React.createElement(AppContent)
  );
};

export default App;