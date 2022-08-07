import { useState, useEffect } from 'react';
import TrackTitle from "./TrackTitle";
import TrackAuthor from "./TrackAuthor";
import TrackAlbum from "./TrackAlbum";
import TrackTime from "./TrackTime";

function PlaylistItem ( {title, author, album, time} ) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    },[]);

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
            <TrackTitle image={title.image} text={title.text} link={title.link} spanText={title.spanText}/>
            <TrackAuthor text={author.text} link={author.link}/>
            <TrackAlbum text={album.text} link={album.link}/>
            <TrackTime text={time.text}/>
        </div>
    );

    return (
        <div className="playlist__item">
            {isLoading ? loadingTrack : loadedTrack}
        </div>
    );
}

export default PlaylistItem;