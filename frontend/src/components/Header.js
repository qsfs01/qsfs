import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Header.css';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/images/logo.jpg';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const drawer = React.createElement(
    'div',
    { className: 'mobile-drawer' },
    React.createElement(
      'div',
      { className: 'drawer-header' },
      React.createElement(
        IconButton,
        { onClick: handleDrawerToggle, sx: { color: 'var(--text-primary)' } },
        React.createElement(CloseIcon)
      )
    ),
    React.createElement(
      List,
      null,
      navItems.map((item) =>
        React.createElement(
          ListItem,
          { key: item.name, onClick: handleDrawerToggle },
          React.createElement(
            Link,
            { 
              to: item.path, 
              className: location.pathname === item.path ? 'nav-link active' : 'nav-link',
              style: { textDecoration: 'none', width: '100%' }
            },
            React.createElement(
              ListItemText,
              { 
                primary: item.name,
                sx: { color: 'var(--text-primary)' }
              }
            )
          )
        )
      )
    )
  );

  return React.createElement(
    AppBar,
    { 
      position: 'fixed',
      className: scrolled ? 'header scrolled' : 'header',
      elevation: scrolled ? 4 : 0,
      sx: { backgroundColor: 'var(--surface-color)', color: 'var(--text-primary)' }
    },
    React.createElement(
      Toolbar,
      { className: 'toolbar' },
      React.createElement(
        'div',
        { className: 'container header-container' },
        // Logo on extreme left
        React.createElement(
          Link,
          { to: '/', className: 'logo-link' },
          React.createElement(
            'div',
            { className: 'logo' },
            React.createElement('img', {
              src: logo,
              alt: 'Queensland Steel Frame Solutions',
              className: 'logo-image',
              style: { 
                display: 'block',
                height: '80px',
                width: 'auto',
                objectFit: 'contain',
                borderRadius: '6px',
                maxHeight: '80px'
              }
            })
          )
        ),
        // Desktop Navigation (center)
        React.createElement(
          'nav',
          { className: 'nav-desktop' },
          navItems.map((item) =>
            React.createElement(
              Link,
              {
                key: item.name,
                to: item.path,
                className: location.pathname === item.path ? 'nav-link active' : 'nav-link'
              },
              item.name
            )
          )
        ),
        // Theme toggle on extreme right (Desktop only)
        React.createElement(
          'div',
          { className: 'nav-actions' },
          React.createElement(ThemeToggle)
        ),
        // Mobile menu button with theme toggle
        React.createElement(
          'div',
          { className: 'nav-mobile' },
          React.createElement(ThemeToggle),
          React.createElement(
            IconButton,
            {
              onClick: handleDrawerToggle,
              sx: { color: 'var(--text-primary)', marginLeft: '10px' }
            },
            React.createElement(MenuIcon)
          )
        )
      )
    ),
    React.createElement(
      Drawer,
      {
        anchor: 'right',
        open: mobileOpen,
        onClose: handleDrawerToggle,
        sx: {
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: 'var(--surface-color)'
          }
        }
      },
      drawer
    )
  );
};

export default Header;