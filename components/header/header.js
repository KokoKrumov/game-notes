import React from 'react';
import HeaderTop from "./header-top";
import Navigation from './navigation';


function MainHeader(props) {
    const classes = props.className

    return (
        <header className={`${classes} bg-woodsmoke`}>
            <HeaderTop />
            <Navigation />
        </header>
    );
}

export default MainHeader;
