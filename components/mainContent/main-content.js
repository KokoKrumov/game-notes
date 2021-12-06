import React from 'react';

function MainContent({classes, children, style}) {
    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

export default MainContent;
