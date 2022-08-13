import DivSvgUse from './DivSvgUse';
import {ICON_VOLUME} from './constants';

function Volume () {
    const iconVolumeProps = {
        propsDiv: {
            className: "volume__image",
        },
        propsSvg: {
            className: "volume__svg",
            alt: "volume",
        },
        propsUse: {
            xlinkHref: ICON_VOLUME,
        },
    };
    return (
        <div className="bar__volume-block volume">
            <DivSvgUse propsDiv={iconVolumeProps.propsDiv} propsSvg={iconVolumeProps.propsSvg} propsUse={iconVolumeProps.propsUse}/>
            <div className="volume__progress _btn">
                <input className="volume__progress-line _btn" type="range" name="range" />
            </div>
        </div>
    );
}

export default Volume;