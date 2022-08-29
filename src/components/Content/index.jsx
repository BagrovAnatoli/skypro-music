import PlaylistTitle from '../PlaylistTitle';
import Playlist from '../Playlist';
import * as S from './styles';

function Content() {
  return (
    <S.Container>
      <PlaylistTitle />
      <Playlist />
    </S.Container>
  );
}

export default Content;
