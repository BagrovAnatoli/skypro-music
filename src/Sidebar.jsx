import { useState, useEffect } from 'react';
import Personal from './Personal';
import sidebarDatas from './sidebarInfo.json';

function Sidebar() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    },[]);

    const loadingSidebarItems = [0,1,2].map((item) => (
        <div className="sidebar__item sidebar__item_loading" key={item}/>
    ));

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
                    {isLoading ? loadingSidebarItems : sidebarItems}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;