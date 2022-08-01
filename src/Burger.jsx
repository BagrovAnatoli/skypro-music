function Burger({onClick}) {
    // eslint-disable-next-line react/no-array-index-key
    const lines = [0,1,2].map((element) => <span className="burger__line" key={element}/>);

    return (
        <div className="nav__burger burger" onClick={onClick} aria-hidden="true">
            { lines }
        </div>
    );
}

export default Burger;