import {ICON_LIKE, ICON_DISLIKE} from '../../constants';
import * as S from './styles';

function TrackPlay() {
    return (
        <S.TrackPlayLikeDis>
            <S.TrackPlayLike>
                <S.TrackPlayLikeSvg alt="Нравится">
                    <use xlinkHref={ICON_LIKE}/>
                </S.TrackPlayLikeSvg>
            </S.TrackPlayLike>
            <S.TrackPlayDislike>
                <S.TrackPlayDislikeSvg alt="Не нравится">
                    <use xlinkHref={ICON_DISLIKE}/>
                </S.TrackPlayDislikeSvg>
            </S.TrackPlayDislike>
        </S.TrackPlayLikeDis>
    );
}

export default TrackPlay;