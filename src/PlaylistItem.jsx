import { useState } from 'react';
import TrackTitle from "./TrackTitle";
import TrackAuthor from "./TrackAuthor";
import TrackAlbum from "./TrackAlbum";
import TrackTime from "./TrackTime";

function PlaylistItem ( {data} ) {

    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 5000);

    const loadingTrack = (
        <div className="playlist__track track">
            <div className="track__title">
                <div className="track__title-image track__title-image_loading"/>
                <div className="track__title-text track__title-text_loading"/>
            </div>
            <div className="track__author track__author_loading"/>
            <div className="track__album track__album_loading"/>
        </div>
    );

    const loadedTrack = (
        <div className="playlist__track track">
            <TrackTitle data={data.title}/>
            <TrackAuthor data={data.author}/>
            <TrackAlbum data={data.album}/>
            <TrackTime data={data.time}/>
        </div>
    );

    return (
        <div className="playlist__item">
            {isLoading ? loadingTrack : loadedTrack}
        </div>
    );
}

export default PlaylistItem;