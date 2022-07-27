function TrackAuthor ( {data} ) {
    const author = data.text ? data.text : '';
    const link = data.link ? data.link : 'http://';
    return (
        <div className="track__author">
            <a className="track__author-link" href={link}>{author}</a>
        </div>
    );
}

export default TrackAuthor;