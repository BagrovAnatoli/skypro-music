import DivSvgUse from './DivSvgUse';

function TrackTitle ( {data} ) {
    const imgAlt = data.image ? data.image.alt : "music";
    const imgPath = data.image ? data.image.path : "img/icon/sprite.svg#icon-note";
    const text = data.text ? data.text : "";
    const link = data.link ? data.link : "http://";

    
    return (
        <div className="track__title">
            <DivSvgUse attrs= {{
                divProps: {className: "track__title-image"},
                svgProps: {
                    className: "track__title-svg",
                    alt: imgAlt,
                },
                useProps: {xlinkHref: imgPath},
            }} />
            <div className="track__title-text">
                <a href={link} className="track__title-link">
                    {text} <span className="track__title-span"/>
                </a>
            </div>
        </div>
    );
}

export default TrackTitle;