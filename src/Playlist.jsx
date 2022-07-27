// import DivSvgUse from './DivSvgUse';
import PlaylistItem from './PlaylistItem';
import tracks from './tracksInfo.json';

function Playlist () {
    const list = [];
    for (let i = 0; i < tracks.length; i += 1) {
        const item = <PlaylistItem data={tracks[i]} key={i}/>
        list.push(item);
    }
    return (
        <div className="content__playlist playlist">
            {list}
        </div>
    );
}

export default Playlist