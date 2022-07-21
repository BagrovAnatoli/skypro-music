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
    return (
        <>
            <DivSvgUse attrs={btnPrevProps}/>
            <DivSvgUse attrs={btnPlayProps}/>
        </>
    );
}

export default Controls;