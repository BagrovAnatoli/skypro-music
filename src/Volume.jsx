import DivSvgUse from './DivSvgUse';

function Volume () {
    const iconVolumeProps = {
        divProps: {
            className: "volume__image",
        },
        svgProps: {
            className: "volume__svg",
            alt: "volume",
        },
        useProps: {
            xlinkHref: "img/icon/sprite.svg#icon-volume",
        },
    };
    return (
        <div className="bar__volume-block volume">
            <DivSvgUse attrs={iconVolumeProps}/>
            <div className="volume__progress _btn">
                <input className="volume__progress-line _btn" type="range" name="range" />
            </div>
        </div>
    );
}

export default Volume;