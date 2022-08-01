import menu from "./menuInfo.json";

function Menu() {

    const listItems = menu.map(({value, href, id}) => (
            <li className="menu_item" key={id}>
                <a href={href} className="menu__link">{value}</a>
            </li>
        ))

    return (
        <div className="nav__menu menu">
            <ul className="menu__list">
            { listItems }
            </ul>
        </div>
    );
}

export default Menu;