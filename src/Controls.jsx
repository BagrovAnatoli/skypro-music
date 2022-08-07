import DivSvgUse from './DivSvgUse';
import {ICON_PREV, ICON_PLAY, ICON_NEXT, ICON_REPEAT, ICON_SHUFFLE} from './constants';


function Controls() {
    const btnPrevProps = {
        propsDiv: {
            className: "player__btn-prev",
        },
        propsSvg: {
            className: "player__btn-prev-svg",
            alt: "prev",
        },
        propsUse: {
            xlinkHref: ICON_PREV,
        },
    };
    const btnPlayProps = {
        propsDiv: {
            className: "player__btn-play _btn",
        },
        propsSvg: {
            className: "player__btn-play-svg",
            alt: "play",
        },
        propsUse: {
            xlinkHref: ICON_PLAY,
        },
    };
    const btnNextProps = {
        propsDiv: {
            className: "player__btn-next",
        },
        propsSvg: {
            className: "player__btn-next-svg",
            alt: "next",
        },
        propsUse: {
            xlinkHref: ICON_NEXT,
        },
    };
    const btnRepeatProps = {
        propsDiv: {
            className: "player__btn-repeat _btn-icon",
        },
        propsSvg: {
            className: "player__btn-repeat-svg",
            alt: "repeat",
        },
        propsUse: {
            xlinkHref: ICON_REPEAT,
        },
    };
    const btnShuffleProps = {
        propsDiv: {
            className: "player__btn-shuffle _btn-icon",
        },
        propsSvg: {
            className: "player__btn-shuffle-svg",
            alt: "shuffle",
        },
        propsUse: {
            xlinkHref: ICON_SHUFFLE,
        },
    };
    return (
        <>
            <DivSvgUse attrs={btnPrevProps} key="1"/>
            <DivSvgUse attrs={btnPlayProps} key="2"/>
            <DivSvgUse attrs={btnNextProps} key="3"/>
            <DivSvgUse attrs={btnRepeatProps} key="4"/>
            <DivSvgUse attrs={btnShuffleProps} key="5"/>
        </>
    );
}

export default Controls;