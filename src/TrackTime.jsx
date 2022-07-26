function TrackTime () {
    return (
        <div className="track__time">
            <svg className="track__time-svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"/>
            </svg>
            <span className="track__time-text">4:44</span>
        </div>
    );
}

export default TrackTime;