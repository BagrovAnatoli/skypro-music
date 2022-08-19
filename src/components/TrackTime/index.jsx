import * as S from './styles';

function TrackTime ( {text} ) {
    const time = text || '';
    return (
        <div>
            <S.TrackTimeSvg alt="седечко">
                <use xlinkHref="img/icon/sprite.svg#icon-like"/>
            </S.TrackTimeSvg>
            <S.TrackTimeText>{time}</S.TrackTimeText>
        </div>
    );
}

export default TrackTime;