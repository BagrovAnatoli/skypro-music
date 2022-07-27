function Burger() {

    // eslint-disable-next-line react/no-array-index-key
    const lines = Array.from({lenght: 3}).map((element, index) => <span className="burger__line" key={index}/>);

    return (
        <div className="nav__burger burger">
            { lines }
        </div>
    );
}

export default Burger;