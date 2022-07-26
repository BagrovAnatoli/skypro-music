import DivSvgUse from './DivSvgUse';

function TrackTitle () {
    return (
        <div className="track__title">
            <DivSvgUse attrs= {{
                divProps: {className: "track__title-image"},
                svgProps: {
                    className: "track__title-svg",
                    alt: "music",
                },
                useProps: {xlinkHref: "img/icon/sprite.svg#icon-note"},
            }} />
            <div className="track__title-text">
                <a href="http://" className="track__title-link">
                    Guilt <span className="track__title-span"/>
                </a>
            </div>
        </div>
    );
}

export default TrackTitle;