function DivSvgUse(props) {
    const { divProps, svgProps, useProps } = props.attrs;
    return (
        <div className={divProps.className}>
            <svg className={svgProps.className} alt={svgProps.alt}>
                <use xlinkHref={useProps.xlinkHref} />
            </svg>
        </div>
    );
}

export default DivSvgUse;