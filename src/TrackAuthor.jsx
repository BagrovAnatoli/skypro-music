function TrackAuthor ( {text, link} ) {
    const author = text || '';
    const linkAuthor = link || 'http://';
    return (
        <div className="track__author">
            <a className="track__author-link" href={linkAuthor}>{author}</a>
        </div>
    );
}

export default TrackAuthor;