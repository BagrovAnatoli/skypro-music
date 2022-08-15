import * as S from './styles';

function IsLoadingContain() {

    return (
        <S.TrackPlayContain>
            <S.TrackPlayImage/>
            <S.TrackPlayAuthor $isLoading/>
            <S.TrackPlayAlbum $isLoading/>
        </S.TrackPlayContain>
    );
}

export default IsLoadingContain;