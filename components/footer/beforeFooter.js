import React from 'react';


function BeforeFooter(props) {
    const classes = props.className

    return (
        <>
        <div className={'bg-footer-about bg-cover bg-no-repeat bg-center text-center text-white uppercase'}>
            <p className={'font-bold text-50 pb-8 pt-24'}>Creative & Innovative</p>
            <p className={'font-bold text-40 pb-8'}>Young & Eager</p>
            <p className={'font-bold text-28 pb-8'}>Affordable prices</p>
            <p className={'font-bold text-20 pb-32'}>Full of enermy</p>
        </div>
        </>
    );
}

export default BeforeFooter;
