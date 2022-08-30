import Search from '../Search';
import Head from '../Head';
import Filters from '../Filters';
import Content from '../Content';
import * as S from './styles';

function CenterBlock() {
  return (
    <S.Container>
      <Search />
      <Head>Треки</Head>
      <Filters />
      <Content />
    </S.Container>
  );
}

export default CenterBlock;
