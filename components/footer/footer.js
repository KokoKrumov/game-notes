import React from 'react';


function Footer(props) {
    const classes = props.className

    return (
        <footer className={'border-border-gold border-t-2 sticky bg-woodsmoke text-silver text-center fixed w-full bottom-0 z-10'}>
            <span className="bg-symbolGold w-full h-5 -mt-1.5 block bg-no-repeat bg-center"
                  style={{transform: 'rotate(180deg)'}}
            />
            <div className={'container mx-auto'}>
                <p className={'py-4'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className={'pb-4 text-blaze-orange'}>Copyright © 2019 All rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
