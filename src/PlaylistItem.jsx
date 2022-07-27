import TrackTitle from "./TrackTitle";
import TrackAuthor from "./TrackAuthor";
import TrackAlbum from "./TrackAlbum";
import TrackTime from "./TrackTime";

function PlaylistItem ( {data} ) {
    return (
        <div className="playlist__item">
            <div className="playlist__track track">
                <TrackTitle data={data.title}/>
                <TrackAuthor data={data.author}/>
                <TrackAlbum data={data.album}/>
                <TrackTime data={data.time}/>
            </div>
        </div>
    );
}

export default PlaylistItem;