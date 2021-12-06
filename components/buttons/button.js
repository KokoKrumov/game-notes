import React from 'react';

function Button({classes, children}) {
    return (
        <div className={`transition ease duration-300 py-3 px-12 rounded uppercase font-roboto-bold text-20 leading-normal inline-block cursor-pointer ${classes}`}>
            {children}
        </div>
    );
}

export default Button;
