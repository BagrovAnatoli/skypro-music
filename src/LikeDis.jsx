import DivSvgUse from './DivSvgUse';
import {ICON_LIKE, ICON_DISLIKE} from './constants';

function TrackPlay() {
    const likeComponentProps = {
        propsDiv: {
            className: "track-play__like _btn-icon",
        },
        propsSvg: {
            className: "track-play__like-svg",
            alt: "like",
        },
        propsUse: {
            xlinkHref: ICON_LIKE,
        },
    };
    const dislikeComponentProps = {
        propsDiv: {
            className: "track-play__dislike _btn-icon",
        },
        propsSvg: {
            className: "track-play__dislike-svg",
            alt: "like",
        },
        propsUse: {
            xlinkHref: ICON_DISLIKE,
        },
    };
    return (
        <div className="track-play__like-dis">
            <DivSvgUse propsDiv={likeComponentProps.propsDiv} propsSvg={likeComponentProps.propsSvg} propsUse={likeComponentProps.propsUse} key="1"/>
            <DivSvgUse propsDiv={dislikeComponentProps.propsDiv} propsSvg={dislikeComponentProps.propsSvg} propsUse={dislikeComponentProps.propsUse} key="2"/>
        </div>
    );
}

export default TrackPlay;