function TrackAlbum ( {data} ) {
    const album = data.text ? data.text : '';
    const link = data.link ? data.link : 'http://';
    return (
        <div className="track__album">
            <a className="track__album-link" href={link}>{album}</a>
        </div>
    );
}

export default TrackAlbum;