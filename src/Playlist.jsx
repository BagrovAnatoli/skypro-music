import PlaylistItem from './PlaylistItem';
import tracks from './tracksInfo.json';

function Playlist () {

    const list = tracks.map(track => (
        <PlaylistItem data={track} key={track.id}/>
    ));

    return (
        <div className="content__playlist playlist">
            {list}
        </div>
    );
}

export default Playlist