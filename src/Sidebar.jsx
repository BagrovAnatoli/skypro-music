import Personal from './Personal';
import sidebarDatas from './sidebarInfo.json';

function Sidebar() {

    const sidebarItems = sidebarDatas.map(({href, imgSrc, imgAlt, id}) => (
        <div className="sidebar__item" key={id}>
            <a href={href} className="sidebar__link">
                <img 
                    src={imgSrc} 
                    alt={imgAlt} 
                    className="sidebar__img" 
                />
            </a>
        </div>
    ));

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