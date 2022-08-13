const emptyArray = Array.from({length: 3});

function Burger({onClick}) {
    const lines = emptyArray.map((_, index) => <span className="burger__line" key={`${index}_line`}/>);

    return (
        <div className="nav__burger burger" onClick={onClick} aria-hidden="true">
            { lines }
        </div>
    );
}

export default Burger;