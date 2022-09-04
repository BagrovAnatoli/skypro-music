import GlobalStyle from './globalStyles';
import { AppRoutes } from './routes';
import * as S from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <AppRoutes />
      </S.Wrapper>
    </>
  );
}

export default App;
