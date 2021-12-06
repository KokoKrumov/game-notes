import React from 'react';

function Input(
    {
        labelText,
        inputName,
        placeholder,
        errorMessage,
        isValid,
        isRequired = false,
        type = 'text',
        background = 'bg-white',
        textColor = 'text-gray-700',
        paddings=' py-2 px-3',
        labelSize='text-sm'
    }) {
    return (
        <div>
            <label className="block text-white  ${labelSize} font-roboto-regular mb-2" htmlFor={inputName}>
                {labelText}
            </label>
            <input
                name={inputName}
                type={type}
                required={isRequired}
                className={`shadow appearance-none rounded ${background} w-full ${paddings} ${textColor} leading-tight focus:outline-none focus:shadow-outline ${isValid ? 'border-silver border' : 'border-blaze-orange border-2'}`}
                id={inputName} placeholder={placeholder}/>
            <p className={`text-red-500 text-sm italic ${isValid ? 'hidden' : 'block'}`}>{errorMessage}</p>
        </div>
    );
}

export default Input;
