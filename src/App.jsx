import Main from './components/Main';
import Bar from './components/Bar';
import GlobalStyle from './globalStyles';
import * as S from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <Main />
          <Bar />
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default App;
