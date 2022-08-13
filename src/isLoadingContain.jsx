function IsLoadingContain() {

    return (
        <div className="track-play__contain">
            <div className="track-play__image" />
            <div className="track-play__author track-play__author_loading"/>
            <div className="track-play__album track-play__album_loading"/>
        </div>
    );
}

export default IsLoadingContain;