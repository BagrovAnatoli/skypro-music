import Controls from './Controls';
import TrackPlay from './TrackPlay';

function Bar() {
    return (
        <div className="bar__content">
            <div className="bar__player-progress" />
            <div className="bar__player-block">
                <div className="bar__player player">
                    <Controls />
                    <TrackPlay />
                </div>
                {/* <div className="bar__volume-block volume"></div> */}
            </div>
        </div>
    );
}

export default Bar;