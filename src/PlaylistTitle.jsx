import DivSvgUse from './DivSvgUse';

function PlaylistTitile () {
    return (
        <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <DivSvgUse attrs={{
                divProps: {className: "playlist-title__col col04"},
                svgProps: {
                    className: "playlist-title__svg",
                    alt: "time",
                },
                useProps: {xlinkHref: "img/icon/sprite.svg#icon-watch"},
            }} />
        </div>
    );
}

export default PlaylistTitile;