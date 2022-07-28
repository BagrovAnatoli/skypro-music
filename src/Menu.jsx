import menu from "./menuInfo.json";

function Menu() {

    const listItems = menu.map(({value, href, id}) => (
            <li className="menuIIitem" key={id}>
                <a href={href} className="menu__link">{value}</a>
            </li>
        ))

    return (
        <div className="nav__menu menu">
            { listItems }
        </div>
    );
}

export default Menu;