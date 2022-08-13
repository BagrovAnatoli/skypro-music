import Controls from './Controls';
import TrackPlay from './TrackPlay';
import Volume from './Volume';

function Bar() {
    return (
        <div className="bar__content">
            <div className="bar__player-progress" />
            <div className="bar__player-block">
                <div className="bar__player player">
                    <Controls />
                    <TrackPlay />
                </div>
                <Volume />
            </div>
        </div>
    );
}

export default Bar;