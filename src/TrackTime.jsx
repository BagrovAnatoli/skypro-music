function TrackTime ( {data} ) {
    const time = data.text ? data.text : '';
    return (
        <div className="track__time">
            <svg className="track__time-svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"/>
            </svg>
            <span className="track__time-text">{time}</span>
        </div>
    );
}

export default TrackTime;