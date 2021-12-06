import React from 'react';

function TextArea(
    {
        labelText,
        inputName,
        placeholder,
        errorMessage,
        isValid,
        isRequired = false,
        rows = '4',
        cols = '50',
        background = 'bg-white',
        textColor = 'text-gray-700',
        paddings=' py-2 px-3',
        labelSize='text-sm'
    }
) {
    return (
        <div>
            <label className={`block text-white ${labelSize} font-roboto-regular mb-2`} htmlFor={inputName}>
                {labelText}
            </label>
            <textarea
                required={isRequired}
                className={`resize-none shadow appearance-none rounded ${background} w-full ${paddings} leading-tight ${textColor} focus:outline-none focus:shadow-outline ${isValid ? 'border-silver border' : 'border-blaze-orange border-2'}`}
                id={inputName} placeholder={placeholder}
                rows={rows} cols={cols} name={inputName}
            />
            <p className={`text-red-500 text-sm italic ${isValid ? 'hidden' : 'block'}`}>{errorMessage}</p>
        </div>
    );
}

export default TextArea;
