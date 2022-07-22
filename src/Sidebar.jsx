import Personal from './Personal';

function Sidebar() {
    return (
        <div className="main__sidebar sidebar">
            <Personal name="Sergey.Ivanov"/>
            {/* <div className="sidebar__block">
                <div className="sidebar__list">
                    {sidebarItems}
                </div>
            </div> */}
        </div>
    );
}

export default Sidebar;