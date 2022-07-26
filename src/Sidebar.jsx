import Personal from './Personal';

function Sidebar() {
    const sidebarDatas = [
        {
            href: "",
            imgSrc: "img/playlist01.png",
            imgAlt: "day's playlist",
        },
        {
            href: "",
            imgSrc: "img/playlist02.png",
            imgAlt: "day's playlist",
        },
        {
            href: "",
            imgSrc: "img/playlist03.png",
            imgAlt: "day's playlist",
        },
    ]

    const sidebarItems = [];

    for (let i = 0; i < sidebarDatas.length; i += 1) {
        sidebarItems.push(
            <div className="sidebar__item" key={i}>
                <a href={sidebarDatas[i].href} className="sidebar__link">
                    <img 
                        src={sidebarDatas[i].imgSrc} 
                        alt={sidebarDatas[i].imgAlt} 
                        className="sidebar__img" 
                    />
                </a>
            </div>
        );
    }

    return (
        <div className="main__sidebar sidebar">
            <Personal name="Sergey.Ivanov"/>
            <div className="sidebar__block">
                <div className="sidebar__list">
                    {sidebarItems}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;