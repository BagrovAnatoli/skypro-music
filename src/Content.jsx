import PlaylistTitle from './PlaylistTitle';
import Playlist from './Playlist';
import * as S from './styles';

function Content() {
    return (
        <S.CenterBlockContent>
            <PlaylistTitle />
            <Playlist />
        </S.CenterBlockContent>
    );
}

export default Content;