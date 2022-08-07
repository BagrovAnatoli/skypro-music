function DivSvgUse({ propsDiv, propsSvg, propsUse }) {
    return (
        <div className={propsDiv.className}>
            <svg className={propsSvg.className} alt={propsSvg.alt}>
                <use xlinkHref={propsUse.xlinkHref} />
            </svg>
        </div>
    );
}

export default DivSvgUse;