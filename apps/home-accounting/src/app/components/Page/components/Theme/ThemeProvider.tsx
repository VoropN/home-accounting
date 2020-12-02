import React, { useCallback, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkMode, setDark] = useState(prefersDark);
  const toggleTheme = useCallback((mode = isDarkMode) => setDark(mode), [isDarkMode]);

  useEffect(() => {
    const onDarkModeChanged = (e) => toggleTheme(e.matches);
    const mediaQuearyForDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    mediaQuearyForDarkMode.addEventListener('change', onDarkModeChanged);

    return () =>
      mediaQuearyForDarkMode.removeEventListener('change', onDarkModeChanged);
  }, [toggleTheme]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
