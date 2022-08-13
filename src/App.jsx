import Main from './Main';
import Bar from './Bar';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
      <>
        <GlobalStyle />
        <div className="wrapper">
          <div className="container">
            <Main/>
            <Bar/>
            <footer/>
          </div>
        </div>
      </>
  );
}

export default App;
