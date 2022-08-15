import {ICON_PREV, ICON_PLAY, ICON_NEXT, ICON_REPEAT, ICON_SHUFFLE} from './constants';
import * as S from './styles';

function Controls() {
    const controlBtnsValues = [
        {name: "prev", alt: "prev", xlinkHref: ICON_PREV},
        {name: "play", alt: "play", xlinkHref: ICON_PLAY, cursor: true},
        {name: "next", alt: "next", xlinkHref: ICON_NEXT},
        {name: "repeat", alt: "repeat", xlinkHref: ICON_REPEAT, hoverIcon: true},
        {name: "shuffle", alt: "shuffle", xlinkHref: ICON_SHUFFLE, hoverIcon: true}
    ];

    return (
        <>
            {controlBtnsValues.map(({name, alt, xlinkHref, cursor, hoverIcon}) => (
                <S.PlayerBtn $btnName={name} $cursor={cursor} $hoverIcon={hoverIcon}>
                    <S.PlayerBtnSvg $btnName={name} alt={alt}>
                        <use xlinkHref={xlinkHref}/>
                    </S.PlayerBtnSvg>
                </S.PlayerBtn>
            ))}
        </>
    );
}

export default Controls;