import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTracks } from '../../store/actions/thunks/catalog';
// import { setPlaylistSizeAC } from '../../store/actions/creators/catalog';
import PlaylistTitle from '../PlaylistTitle';
import Playlist from '../Playlist';
// import { PLAYLISTS } from '../../constants';
// import allTracks from '../../data/tracksInfo.json';
import * as S from './styles';
import {
    // catalogSelector,
    tracksLoadingSelector,
    // tracksErrorSelector,
    // allTracksSelector,
    allTracksParser,
} from '../../store/selectors/catalog';

// function getTracksByPlylistId(id) {
//     if (id >= 0) {
//         const playlist = PLAYLISTS.find((list) => list.id === id);
//         if (playlist) {
//             return playlist.content;
//         }
//     }

//     return allTracks;
// }

function Content({ playlistId }) {
    // const tracks = getTracksByPlylistId(playlistId);
    console.log(playlistId);

    const tracks = useSelector(allTracksParser);
    const loading = useSelector(tracksLoadingSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTracks());
    }, []);

    return (
        <S.Container>
            <PlaylistTitle />
            <Playlist tracks={tracks} loading={loading} />
        </S.Container>
    );
}

export default Content;
