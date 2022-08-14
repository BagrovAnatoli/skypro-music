import * as S from './styles';

function TrackAlbum ( {text, link} ) {
    const album = text || '';
    const linkAlbum = link || 'http://';
    return (
        <S.TrackAlbum>
            <S.TrackAlbumLink href={linkAlbum}>{album}</S.TrackAlbumLink>
        </S.TrackAlbum>
    );
}

export default TrackAlbum;