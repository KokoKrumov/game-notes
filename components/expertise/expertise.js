import React from 'react';
import ExpertiseArtWork from "./expertiseArtWork";
import ExpertiseFrontEnd from "./expertiseFrontEnd";
import ExpertiseBackEnd from "./expertiseBackEnd";
import ExpertiseMisc from "./expertiseMisc";

function Expertise(props) {

    return (
        <div className={'container 4xl:max-w-screen-2xl mx-auto px-4'}>
            <div className={'grid grid-rows-1 grid-cols-4 text-center'}>
                <div>
                    <ExpertiseArtWork />
                </div>
                <div>
                    <ExpertiseFrontEnd />
                </div>
                <div>
                    <ExpertiseBackEnd />
                </div>
                <div>
                    <ExpertiseMisc />
                </div>
            </div>
        </div>
    );
}

export default Expertise;