import Search from '../Search';
import Head from '../Head';
import Filters from '../Filters';
import Content from '../Content';
import * as S from './styles';

function CenterBlock({ playlistId }) {
  return (
    <S.Container>
      <Search />
      <Head>Треки</Head>
      <Filters />
      <Content playlistId={playlistId}/>
    </S.Container>
  );
}

export default CenterBlock;
