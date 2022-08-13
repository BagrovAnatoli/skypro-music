import DivSvgUse from './DivSvgUse';
import {ICON_WATCH} from './constants';

function PlaylistTitile () {
    return (
        <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <DivSvgUse 
                propsDiv={{className: "playlist-title__col col04"}}
                propsSvg={{
                    className: "playlist-title__svg",
                    alt: "time",
                }}
                propsUse={{xlinkHref: ICON_WATCH}}
             />
        </div>
    );
}

export default PlaylistTitile;