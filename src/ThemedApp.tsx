import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import darkTheme from './theme/darkTheme';
import GlobalStyle from './theme/GlobalStyle';
import lightTheme from './theme/lightTheme';
import { ThemeTypes } from './constants/ThemeTypes';
import { themeSelector } from './selectors/themeSelector';

const ThemedApp: React.FC<{}> = () => {
  const theme = useSelector(themeSelector);
  return (
    <ThemeProvider theme={theme === ThemeTypes.Dark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

export default ThemedApp;
