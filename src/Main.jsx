import Nav from './Nav'
import CenterBlock from './CenterBlock'
import Sidebar from './Sidebar'

function Main() {
    return (
        <div className="main">
            <Nav />
            <CenterBlock />
            <Sidebar />
        </div>
    );
}

export default Main;