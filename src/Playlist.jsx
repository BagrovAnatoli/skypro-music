import PlaylistItem from './PlaylistItem';
import tracks from './tracksInfo.json';

function Playlist () {

    const list = tracks.map(({title, author, album, time, id}) => (
        <PlaylistItem title={title} author={author} album={album} time={time} key={id}/>
    ));

    return (
        <div className="content__playlist playlist">
            {list}
        </div>
    );
}

export default Playlist