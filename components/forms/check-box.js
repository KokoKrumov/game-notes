import React from 'react';
import Link from 'next/link'

function CheckBox({text}) {
    return (
        <div>
            <label className="block text-white font-roboto-regular">
                <input className="mr-2 leading-tight" type="checkbox"/>
                <span className="text-sm">
                    {text}
                </span>
            </label>
        </div>
    );
}

export default CheckBox;
