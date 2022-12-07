import PlaylistItem from '../PlaylistItem';
import PlaylistSkeletonItem from '../PlaylistSkeletonItem';
import * as S from './styles';

function Playlist({ tracks, loading }) {

    const list = tracks.map(({ title, author, album, time, id }) => (
        <PlaylistItem
            title={title}
            author={author}
            album={album}
            time={time}
            key={id}
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
