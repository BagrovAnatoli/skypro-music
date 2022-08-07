import DivSvgUse from './DivSvgUse';
import {ICON_NOTE} from './constants';

function TrackTitle ( {image, text, link, spanText} ) {
    const imgAlt = image ? image.alt : "music";
    const imgPath = image ? image.path : ICON_NOTE;
    const textTitle = text || "";
    const linkTitle = link || "http://";

    
    return (
        <div className="track__title">
            <DivSvgUse 
                propsDiv={{className: "track__title-image"}}
                propsSvg={{
                    className: "track__title-svg",
                    alt: imgAlt,
                }}
                propsUse={{xlinkHref: imgPath}}
            />
            <div className="track__title-text">
                <a href={linkTitle} className="track__title-link">
                    {textTitle} <span className="track__title-span">{spanText}</span>
                </a>
            </div>
        </div>
    );
}

export default TrackTitle;