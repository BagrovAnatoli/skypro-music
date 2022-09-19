/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';
import { themes, ThemeContext } from './contexts/theme';
import GlobalStyle from './globalStyles';
import * as S from './styles';
import { AppRoutes } from './routes';
import checkCookie from './utils/check-cookie';

function App() {

  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const cookie = checkCookie('token');

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <GlobalStyle theme={currentTheme}/>
      <S.Wrapper>
        <AppRoutes cookie={cookie}/>
      </S.Wrapper>
    </ThemeContext.Provider>
  );
}

export default App;
