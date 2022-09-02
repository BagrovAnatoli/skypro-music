import Nav from '../Nav';
import CenterBlock from '../CenterBlock';
import Sidebar from '../Sidebar';
import * as S from './styles';

function Main() {
  return (
    <S.Main>
      <Nav />
      <CenterBlock />
      <Sidebar />
    </S.Main>
  );
}

export default Main;
