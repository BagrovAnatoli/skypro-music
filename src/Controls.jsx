import DivSvgUse from './DivSvgUse';

function Controls() {
    const btnPrevProps = {
        divProps: {
            className: "player__btn-prev",
        },
        svgProps: {
            className: "player__btn-prev-svg",
            alt: "prev",
        },
        useProps: {
            xlinkHref: "img/icon/sprite.svg#icon-prev",
        },
    };
    const btnPlayProps = {
        divProps: {
            className: "player__btn-play _btn",
        },
        svgProps: {
            className: "player__btn-play-svg",
            alt: "play",
        },
        useProps: {
            xlinkHref: "img/icon/sprite.svg#icon-play",
        },
    };
    const btnNextProps = {
        divProps: {
            className: "player__btn-next",
        },
        svgProps: {
            className: "player__btn-next-svg",
            alt: "next",
        },
        useProps: {
            xlinkHref: "img/icon/sprite.svg#icon-next",
        },
    };
    const btnRepeatProps = {
        divProps: {
            className: "player__btn-repeat _btn-icon",
        },
        svgProps: {
            className: "player__btn-repeat-svg",
            alt: "repeat",
        },
        useProps: {
            xlinkHref: "img/icon/sprite.svg#icon-repeat",
        },
    };
    const btnShuffleProps = {
        divProps: {
            className: "player__btn-shuffle _btn-icon",
        },
        svgProps: {
            className: "player__btn-shuffle-svg",
            alt: "shuffle",
        },
        useProps: {
            xlinkHref: "img/icon/sprite.svg#icon-shuffle",
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