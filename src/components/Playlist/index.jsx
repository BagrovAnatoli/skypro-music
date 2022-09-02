import PlaylistItem from '../PlaylistItem';
import tracks from '../../data/tracksInfo.json';
import * as S from './styles';

function Playlist() {
  const list = tracks.map(({ title, author, album, time, id }) => (
    <PlaylistItem
      title={title}
      author={author}
      album={album}
      time={time}
      key={id}
    />
  ));

  return <S.ContentPlaylist>{list}</S.ContentPlaylist>;
}

export default Playlist;
