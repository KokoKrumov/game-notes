import React from 'react';
import MainHeader from "../header/header";
import Footer from "../footer/footer";

function Layout(props) {
    return (
        <div>
            <MainHeader className='sticky top-0 z-100'/>
            <main className="relative bg-woodsmoke">
                {props.children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
