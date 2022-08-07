import React from 'react';
import Logo from './Logo';
import Burger from './Burger';
import Menu from './Menu';

const { useState } = React;

function Nav() {

    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(prevVisible => !prevVisible);
    }

    const menuComponent = isMenuVisible ? <Menu /> : null;

    return (
        <div className="main__nav nav">
            <Logo />
            <Burger onClick={toggleMenu}/>
            { menuComponent }
        </div>
    );
}

export default Nav;