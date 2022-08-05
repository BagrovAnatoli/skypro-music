import { useState } from 'react';
import DivSvgUse from './DivSvgUse';

function Contain() {

    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 5000);

    const isLoadingContain =  (
        <div className="track-play__contain">
            <div className="track-play__image" />
            <div className="track-play__author track-play__author_loading"/>
            <div className="track-play__album track-play__album_loading"/>
        </div>
    );

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
    if (isLoading) {
        return isLoadingContain;
    }

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