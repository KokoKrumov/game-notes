// import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import PhoneIcon from "../icons/phone-icon";
import MailIcon from '../icons/mail-icon';
import MailIcon_v2 from '../icons/mail-icon-v2';
import LocationIcon from '../icons/location-icon';
import FbIcon from '../icons/fb-icon';



function HeaderTop() {
    
    // const [change,setChange] = useState(true)
    
    // function handleScroll(e) {
    //     if (window.scrollY === 0) {
    //             setChange( true );
    //         } else if (window.scrollY > 0 ) {
    //             setChange( false );
    //         }
    //     }
    
    //   useEffect( () => {
    //     window.addEventListener('scroll', handleScroll);
    //     setChange( true );
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    //   })

    // const topHeaderStyle = change;
    // console.log(topHeaderStyle)
    return (
        <div className="container 4xl:max-w-screen-2xl mx-auto px-4" >
            <div className="flex justify-between border-fuchsia-600 inline-block text-silver grid grid-cols-3">
                <div className="inline-block">
                    <p className="inline-block font-thin mr-1">follow us on: </p>
                    <Link href="/">
                        <a>
                            <FbIcon />
                        </a>
                    </Link>
                    <Link href="mailto:gameon@wienergames.com">
                        <a>
                            <MailIcon />
                        </a>
                    </Link>
                </div>
                <div className="inline-block text-center align-middle">
                    <Link href="tel:+359887622774">
                        <a>
                            <PhoneIcon color={'white'}/>
                            <p className="inline-block font-thin mr-2 text-sm align-middle"> +359 887 622 774</p>
                        </a>
                    </Link>
                    <Link href="mailto:gameon@wienergames.com">
                        <a className="align-middle">
                            <MailIcon_v2 color={'white'}/>
                            <p className="inline-block font-thin"> gameon@wienergames.com</p>
                        </a>
                    </Link>
                </div>
                <div className="inline-block text-right">
                    <Link href="https://goo.gl/maps/eAFTtywGxFoNpQd87">
                        <a target="_blank">
                            <LocationIcon color={'white'}/>
                            <p className="inline-block font-thin mr-1 align-middle"> Sofia 1606, Bulgaria 53-55 gen. Totleben Blvd. </p>
                        </a>
                    </Link>                        
                </div>
            </div>
            <hr className="border-tundora" />
        </div>
    );   
}

export default HeaderTop;
