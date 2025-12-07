import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Tooltip from '@mui/material/Tooltip';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return React.createElement(
    Tooltip,
    { title: darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode' },
    React.createElement(
      IconButton,
      {
        onClick: toggleTheme,
        sx: {
          color: 'var(--text-primary)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'rotate(180deg)',
            color: 'var(--primary-color)',
          }
        }
      },
      darkMode 
        ? React.createElement(Brightness7Icon)
        : React.createElement(Brightness4Icon)
    )
  );
};

export default ThemeToggle;