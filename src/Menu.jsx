function Menu() {

    const menuItems = [
        {value: "Главное", href: "http://"},
        {value: "Мой плейлист", href: "http://"},
        {value: "Войти", href: "http://"},
    ]
    const listItems = [];
    for (let i = 0; i < menuItems.length; i += 1) {
        listItems.push(
            <li className="menuIIitem" key={i}>
                <a href={menuItems[i].href} className="menu__link">{menuItems[i].value}</a>
            </li>
        );
    }

    return (
        <div className="nav__menu menu">
            { listItems }
        </div>
    );
}

export default Menu;