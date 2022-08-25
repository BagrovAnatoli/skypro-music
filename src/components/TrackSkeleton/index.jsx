import * as S from '../PlaylistItem/styles';

function TrackSkeleton () {
    return (
        <S.PlaylistTrack>
            <S.TrackTitle>
                <S.TrackTitleImage/>
                <S.TrackTitleTextLoading/>
            </S.TrackTitle>
            <S.TrackAuthor $isLoading/>
            <S.TrackAlbum $isLoading/>
        </S.PlaylistTrack>
    );
}

export default TrackSkeleton;