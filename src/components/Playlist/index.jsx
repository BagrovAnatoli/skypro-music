import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentTrackAC, setPlaylistSizeAC } from '../../store/actions/creators/catalog';
import PlaylistItem from '../PlaylistItem';
import PlaylistSkeletonItem from '../PlaylistSkeletonItem';
import * as S from './styles';

function Playlist({ tracks, loading }) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!loading && tracks) {
            dispatch(setPlaylistSizeAC(tracks.length));
        }
    }, [loading]);

    const onTrackClick = (id, author, album, duration, index) => {
        console.log(`слушать трек ${id}`);
        dispatch(setCurrentTrackAC({id, author, album, duration, index}));
    }

    const list = tracks.map(({ title, author, album, time, id }, trackIndex) => (
        <PlaylistItem
            title={title}
            author={author}
            album={album}
            time={time}
            key={id}
            onTrackClick={() => onTrackClick(id, author.text, album.text, time.seconds, trackIndex)}
        />
    ));

    const skeletonList = Array(10).fill().map(() => <PlaylistSkeletonItem/>);
    
    return (
        <S.ContentPlaylist>
            {loading === true ? skeletonList : list}
        </S.ContentPlaylist>
    );
}

export default Playlist;
