import { useDispatch } from 'react-redux';
import { setCurrentTrackAC } from '../../store/actions/creators/catalog';
import PlaylistItem from '../PlaylistItem';
import PlaylistSkeletonItem from '../PlaylistSkeletonItem';
import * as S from './styles';

function Playlist({ tracks, loading }) {
    const dispatch = useDispatch();

    const onTrackClick = (id, author, album) => {
        console.log(`слушать трек ${id}`);
        dispatch(setCurrentTrackAC({id, author, album}));
    }

    const list = tracks.map(({ title, author, album, time, id }) => (
        <PlaylistItem
            title={title}
            author={author}
            album={album}
            time={time}
            key={id}
            onTrackClick={() => onTrackClick(id, author.text, album.text)}
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
