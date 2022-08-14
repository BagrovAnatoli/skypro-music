import {ICON_WATCH} from './constants';
import * as S from './styles';

function PlaylistTitile () {
    return (
        <S.ContentTitle>
            <S.PlaylistTitleCol $col="1">Трек</S.PlaylistTitleCol>
            <S.PlaylistTitleCol $col="2">ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol>
            <S.PlaylistTitleCol $col="3">АЛЬБОМ</S.PlaylistTitleCol>
            <S.PlaylistTitleCol $col="4">
                <S.PlayistTitleSvg alt="time">
                    <use xlinkHref={ICON_WATCH}/>
                </S.PlayistTitleSvg>
            </S.PlaylistTitleCol>
        </S.ContentTitle>
    );
}

export default PlaylistTitile;