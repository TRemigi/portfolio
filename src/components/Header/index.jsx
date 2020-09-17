import React from 'react';
import Navigation from '../Navigation';

function Header (props) {
    const { navSelected, setNavSelected } = props;

    return (
        <header>
            <Navigation
            navSelected={navSelected}
            setNavSelected={setNavSelected}
            />
        </header>
    )
}

export default Header;