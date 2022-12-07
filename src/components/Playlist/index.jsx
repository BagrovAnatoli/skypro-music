import { useDispatch } from 'react-redux';
import { setCurrentTrackIdAC } from '../../store/actions/creators/catalog';
import PlaylistItem from '../PlaylistItem';
import PlaylistSkeletonItem from '../PlaylistSkeletonItem';
import * as S from './styles';

function Playlist({ tracks, loading }) {
    const dispatch = useDispatch();

    const onTrackClick = (id) => {
        console.log(`слушать трек ${id}`);
        dispatch(setCurrentTrackIdAC(id));
    }

    const list = tracks.map(({ title, author, album, time, id }) => (
        <PlaylistItem
            title={title}
            author={author}
            album={album}
            time={time}
            key={id}
            onTrackClick={() => onTrackClick(id)}
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
