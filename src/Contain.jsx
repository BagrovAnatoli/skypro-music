import DivSvgUse from './DivSvgUse';

function Contain() {
    const imageProps = {
        divProps: {
            className: "track-play__image",
        },
        svgProps: {
            className: "track-play__svg",
            alt: "music",
        },
        useProps: {
            xlinkHref: "img/icon/sprite.svg#icon-note",
        },
    };
    return (
        <div className="track-play__contain">
            <DivSvgUse attrs={imageProps}/>
            <div className="track-play__author">
                <a href="http://" className="track-play__author-link">Ты та...</a>
            </div>
            <div className="track-play__album">
                <a href="http://" className="track-play__album-link">Баста</a>
            </div>
        </div>
    );
}

export default Contain;