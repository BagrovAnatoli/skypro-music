import Logo from './Logo';
import Burger from './Burger';
import Menu from './Menu';

function Nav() {
    return (
        <div className="main__nav nav">
            <Logo />
            <Burger />
            <Menu />
        </div>
    );
}

export default Nav;