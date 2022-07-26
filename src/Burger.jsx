function Burger() {

    const lines = [];
    for (let i = 0; i < 3; i += 1) {
        lines.push(<span className="burger__line" key={i}/>);
    }

    return (
        <div className="nav__burger burger">
            { lines }
        </div>
    );
}

export default Burger;