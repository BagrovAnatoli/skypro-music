import DivSvgUse from './DivSvgUse';

function TrackPlay() {
    const likeComponentProps = {
        divProps: {
            className: "track-play__like _btn-icon",
        },
        svgProps: {
            className: "track-play__like-svg",
            alt: "like",
        },
        useProps: {
            xlinkHref: "img/icon/sprite.svg#icon-like",
        },
    };
    const dislikeComponentProps = {
        divProps: {
            className: "track-play__dislike _btn-icon",
        },
        svgProps: {
            className: "track-play__dislike-svg",
            alt: "like",
        },
        useProps: {
            xlinkHref: "img/icon/sprite.svg#icon-dislike",
        },
    };
    return (
        <div className="track-play__like-dis">
            <DivSvgUse attrs={likeComponentProps} key="1"/>
            <DivSvgUse attrs={dislikeComponentProps} key="2"/>
        </div>
    );
}

export default TrackPlay;