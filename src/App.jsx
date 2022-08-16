import Main from './Main';
import Bar from './Bar';
import GlobalStyle from './globalStyles';
import * as S from './styles';


function App() {
  return (
      <>
        <GlobalStyle />
        <S.Wrapper>
          <S.Container>
            <Main/>
            <Bar/>
            <footer/>
          </S.Container>
        </S.Wrapper>
      </>
  );
}

export default App;
