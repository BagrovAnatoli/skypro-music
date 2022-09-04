/* eslint-disable no-console */
import PlaylistTitle from '../PlaylistTitle';
import Playlist from '../Playlist';
import { PLAYLISTS } from '../../constants';
import allTracks from '../../data/tracksInfo.json';
import * as S from './styles';

function Content({ playlistId }) {

  let tracks;
  if (playlistId >= 0) {
    const playlist = PLAYLISTS.find((list) => list.id === playlistId);
    tracks = playlist.content;
  } else {
    tracks = allTracks;
  }



  return (
    <S.Container>
      <PlaylistTitle />
      <Playlist tracks={tracks}/>
    </S.Container>
  );
}

export default Content;
