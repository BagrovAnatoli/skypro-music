function Menu() {

    const menuItems = [
        {value: "Главное", href: "http://", id: 0},
        {value: "Мой плейлист", href: "http://", id: 1},
        {value: "Войти", href: "http://", id: 2},
    ]

    const listItems = menuItems.map(({value, href, id}) => (
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