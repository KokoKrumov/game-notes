import React from 'react';

function AlertError(props) {
    const {text} = props
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">{text}</strong>
        </div>
    );
}

export default AlertError;
