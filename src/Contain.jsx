import { useState, useEffect } from "react";
import DivSvgUse from "./DivSvgUse";
import IsLoadingContain from "./IsLoadingContain";
import {ICON_NOTE} from './constants';

function Contain() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    },[]);

    const imageProps = {
        propsDiv: {
            className: "track-play__image",
        },
        propsSvg: {
            className: "track-play__svg",
            alt: "music",
        },
        propsUse: {
            xlinkHref: ICON_NOTE,
        },
    };

    return (
        isLoading ? <IsLoadingContain /> : 
        <div className="track-play__contain">
            <DivSvgUse propsDiv={imageProps.propsDiv} propsSvg={imageProps.propsSvg} propsUse={imageProps.propsUse}/>
            {/* <DivSvgUse {...imageProps}/> */}
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