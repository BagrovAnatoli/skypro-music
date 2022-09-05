/* eslint-disable no-console */
import PlaylistTitle from '../PlaylistTitle';
import Playlist from '../Playlist';
import { PLAYLISTS } from '../../constants';
import allTracks from '../../data/tracksInfo.json';
import * as S from './styles';

function Content({ playlistId }) {

  function getTracksByPlylistId(id) {
    if (id >= 0) {
      const playlist = PLAYLISTS.find((list) => list.id === id);
      if(playlist) {
        return playlist.content;
      }
    }

    return allTracks;
  }

  const tracks = getTracksByPlylistId(playlistId);
 
  return (
    <S.Container>
      <PlaylistTitle />
      <Playlist tracks={tracks} />
    </S.Container>
  );
}

export default Content;
