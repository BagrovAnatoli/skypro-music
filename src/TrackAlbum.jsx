function TrackAlbum ( {text, link} ) {
    const album = text || '';
    const linkAlbum = link || 'http://';
    return (
        <div className="track__album">
            <a className="track__album-link" href={linkAlbum}>{album}</a>
        </div>
    );
}

export default TrackAlbum;