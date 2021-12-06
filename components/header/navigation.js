import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import HomeIcon from "../icons/home-icon";
import NavItem from './nav-item';
import styled from "styled-components";


export const Navigation = () => {
    const router = useRouter();

    return (

        <nav className="container 4xl:max-w-screen-2xl mx-auto text-white px-4">
            <div
                className="flex justify-between border-fuchsia-600 inline-block uppercase text-top-header-color grid grid-cols-3">
                <ClassActive>
                    <div className="inline-block text-center">
                        <Link href="/">
                            <a className={router.pathname == "/" ? "active float-left inline-block w-18 m-5 mr-2 ml-0" : "float-left inline-block w-18 m-5 mr-2 ml-0"}>
                                <HomeIcon color={'#fff'}/>
                            </a>
                        </Link>
                        <div className="inline-block w-28 my-5 mx-2 pl-5">
                            <Link href={'/games'}>
                                <a className={router.pathname == "/games" ? "active" : ""}>
                                    <NavItem
                                        paddingLeft='26px'
                                        title='Games'
                                        subTitle='Portfolio'
                                    />
                                </a>
                            </Link>
                        </div>
                        <div
                            style={{cursor: 'not-allowed'}}
                            className="inline-block w-28 my-5 mx-2 pl-5 cursor-not-allowed">
                            <div className={'pointer-events-none'}>
                                <Link href={'/platform'}>
                                    <a className={router.pathname == "/platform" ? "active" : ""}>
                                        <NavItem
                                            paddingLeft='14px'
                                            title='Platform'
                                            subTitle='RGS & BO'
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        {/*<div className="inline-block w-28 my-5 mx-2 pl-5">*/}
                        {/*    <Link href={'/platform'}>*/}
                        {/*        <a className={router.pathname == "/platform" ? "active" : ""}>*/}
                        {/*            <NavItem*/}
                        {/*                paddingLeft='14px'*/}
                        {/*                title='Platform'*/}
                        {/*                subTitle='RGS & BO'*/}
                        {/*            />*/}
                        {/*        </a>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                        <div className="inline-block w-28 my-5 mx-2 pl-5">
                            <Link href={'/service'}>
                                <a className={router.pathname == "/service" ? "active" : ""}>
                                    <NavItem
                                        paddingLeft='8px'
                                        title='Services'
                                        subTitle='Development'
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </ClassActive>
                <div className="inline-block text-center ml-14 mr-14">
                    <Link href={'/'}>
                        <div className="cursor-pointer">
                            <div className="w-full h-20 bg-50% bg-100% bg-no-repeat bg-color-logo bg-logo-bavel"
                                 style={{
                                     background: `linear-gradient(-45deg, transparent 57px, #373737 0) right, linear-gradient(45deg, transparent 57px, #373737 0) left`,
                                     backgroundSize: '50% 100%',
                                     backgroundRepeat: 'no-repeat',
                                     marginBottom: '-80px'
                                 }}
                            />
                            <span className="w-full h-20 pt-2 block bg-no-repeat bg-center">
                                    <Image
                                        src={'/images/WienerLogo.svg'}
                                        alt="Wiener"
                                        width={'175'}
                                        height={'55'}
                                    />
                                </span>
                        </div>
                    </Link>
                </div>
                <ClassActive>
                    <div className="inline-block text-center">
                        <div className="inline-block w-28 my-5 mx-2">
                            <Link href={'/about'}>
                                <a className={router.pathname == "/about" ? "active" : ""}>
                                    <NavItem
                                        paddingLeft='14px'
                                        title='About Us'
                                        subTitle='The Team'
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="inline-block w-28 my-5 mx-2">
                            <Link href={'/partnership'}>
                                <a className={router.pathname == "/partnership" ? "active" : ""}>
                                    <NavItem
                                        paddingLeft='2px'
                                        title='Partnership'
                                        subTitle='Advatages'
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="inline-block w-28 my-5 mx-2">
                            <Link href={'/contacts'}>
                                <a className={router.pathname == "/contacts" ? "active" : ""}>
                                    <NavItem
                                        paddingLeft='15px'
                                        title='Contacts'
                                        subTitle='Reach Us'
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </ClassActive>
            </div>
        </nav>

    );
}

const ClassActive = styled.div`
  .homeIcon:hover {
    stroke: #fe6720 !important;
  }

  .active .homeIcon {
    stroke: #fe6720 !important;
  }

  .active .textTop {
    color: rgb(254, 110, 53) !important;
    transform: translateY(19.4476px) translateZ(0px) !important;
  }

  .active .textBottom {
    color: rgb(255, 255, 255) !important;
    transform: translateY(-20px) translateZ(0px) !important;
  }

  .active .borderBottom {
    width: 112px !important;
  }
`;

export default Navigation;
