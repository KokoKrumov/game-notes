import React from 'react';
import Input from "../forms/input";
import CheckBox from "../forms/check-box";
import Button from "../buttons/button";

function SectionSignUp() {
    return (
        <section className={'section bg-gradient-to-r from-chambray via-spectra to-pickled-blue-wood'}>
            <div
                className={'container mx-auto py-16 px-4'}>
                <div className={'grid grid-flow-row gap-x-4 grid-cols-3'}>
                    <div/>
                    <div>
                        <h6 className={'font-roboto-black text-20 text-white text-center uppercase'}>
                            Sign up for press release
                        </h6>
                        <div className={'mt-6'}>
                            <form className="">
                                <div className={'grid grid-flow-row gap-x-4 grid-cols-2'}>
                                    <div>
                                        <Input labelText={'Your name'} placeholder={'John Doe'}
                                               inputName={'user-name'} errorMessage={'Please enter a name'}
                                               isValid={true}/>
                                    </div>
                                    <div>
                                        <Input labelText={'E-mail address'} placeholder={'john@mail.com'}
                                               inputName={'user-mail'} errorMessage={'Please enter an e-mail'}
                                               isValid={true}/>
                                    </div>
                                </div>
                                <div className={'mt-6 text-center'}>
                                    <CheckBox
                                        text={<span>I have read and agree to the <a href=""
                                                                                    className={"font-roboto-bold underline hover:no-underline"}>terms & conditions</a></span>}/>
                                    <div>
                                        <Button
                                            classes={'mt-8 mb-3 bg-blaze-orange text-white hover:bg-white hover:text-blaze-orange'}>
                                            subscribe
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div/>
                </div>

            </div>
        </section>
    );
}

export default SectionSignUp;

