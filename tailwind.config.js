const {zIndex} = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        boxShadow: {
            'trap-outer-orange': '0px 0px 20px #FF6600',
            'trap-hard-inner-orange': 'inset 1rem 1rem #FF6600',
            'footer-top': '0px -25px 40px 5px #17161a',
            'cardCircleOuter': '0px 0px 17px -7px #FFFFFF',
            'cardCircleInner': 'inset 0px 0px 17px -7px #FFFFFF',
                ...defaultTheme.boxShadow
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            // ...defaultTheme.screens,
            '2xl': '1400px',
            // => @media (min-width: 1400px) { ... }

            '4xl': '1930px',
            // => @media (min-width: 1930px) { ... }


            // ...defaultTheme.screens,
        },
        backgroundSize: {
            '100%': '100%',
            '102%': '102%',
            '110%': '110%',
            ...defaultTheme.backgroundSize
        },
        backgroundPosition: {
            'center-top-99': 'center 99px',
            'center-top-130': 'center 130px',
            ...defaultTheme.backgroundPosition
        },
        extend: {
            inset: {
                '46/5': '46.5%',
                '3/8': '0.92rem'
            },
            colors: {
                'firefly': '#0f2839',
                'bg-logo-color': '#373737',
                'dawn-pink': '#F6EAEA',
                'verdun-green': '#3D7703',
                'blaze-orange': '#FF6600',
                'tuna': '#36333E',
                'mountain-mist': '#9A96A3',
                'cream-can': '#F3D367',
                'kumera': '#966629',
                'woodsmoke': '#17161A',
                'alto': '#00000029',
                'tundora': '#4E4E4E',
                'mine-shaft': '#373737',
                'silver': '#BEBEBE',
                'aqua': '#00EDFF',
                'atomic-tangerine': '#FF6600A8',
                'border-gold': '#8c7a4e',
                'color-gold': '#FBCD7F',
                'color-yellow': '#FCE8C7',
                'ship-gray': '#47444E',
                'smalt-blue': '#59778E',
                'spectra': '#345F61',
                'chambray': '#354883',
                'pickled-blue-wood': '#345161',
                'baltic-sea': '#323035'
            },
            backgroundImage: theme => ({
                'hudimg': "url('/images/pages/HomePage/hudimg.jpg')",
                'hudimgContacts': "url('/images/pages/Contacts/hudimg.jpg')",
                'hudimgAbout': "url('/images/pages/AboutUs/hudimg.jpg')",
                'hudimgServices': "url('/images/pages/Services/hudimg.jpg')",
                'borderGrayServices': "url('/images/pages/Services/borderGray.png')",
                'social-game': "url('/images/pages/Services/Social Gaming.png')",
                'pxRepeat': "url('/images/pages/Services/Bgr_pxRepeat.jpg')",
                'footer-services': "url('/images/pages/Services/bottomBannert.jpg')",
                'border-red': "url('/images/pages/Services/RedBorder.png')",
                'border-blue': "url('/images/pages/Services/BlueBorder.png')",
                'border-green': "url('/images/pages/Services/GreenBorder.png')",
                'border-orange': "url('/images/pages/Services/OrangeBorder.png')",
                'expertiseDark': "url('/images/pages/Services/contentBgr.jpg')",
                'bgr': "url('/images/pages/AboutUs/bgr.jpg')",
                'symbolGold': "url('/images/pages/AboutUs/symbolGold_v1.png')",
                'textOnceUponaTime': "url('/images/pages/AboutUs/onceUponaTime.svg')",
                'creative': "url('/images/pages/AboutUs/creative.png')",
                'arrowLeft': "url('/images/pages/AboutUs/arrowLeft.png')",
                'arrowRight': "url('/images/pages/AboutUs/ArrowRight.png')",
                'YoungEager': "url('/images/pages/AboutUs/YoungEager.png')",
                'Affordable': "url('/images/pages/AboutUs/AffordablePrices.png')",
                'FullofEnergy': "url('/images/pages/AboutUs/FullofEnergy.png ')",
                'footer-about': "url('/images/pages/AboutUs/bottomBannert.jpg ')",
                'border-vertical-gold': "url('/images/pages/AboutUs/symbolGold.png')",
                'border-vertical-right': "url('/images/pages/AboutUs/symbolGold_left.png')",
                'border-vertical-left': "url('/images/pages/AboutUs/symbolGold_right.png')",
                'mlbFirstColBackground': "url('/images/pages/HomePage/mlbFirstColBg.png')",
                'mlbSecondColBackground': "url('/images/pages/HomePage/mlbSecondColBg.png')",
                'mlbMergedBg': "url('/images/pages/HomePage/mlbMergedBg.png')",
                'mlbMergedBgContacts': "url('/images/pages/Contacts/mlbMergedBgContacts.png')",
                'hudimgPartner': "url('/images/pages/Partnership/hudimg.jpg')",
                'space': "url('/images/pages/Partnership/space.jpg')",
                'space-bottom': "url('/images/pages/Partnership/bottomBannert.jpg')",
                'darkMountain': "url('/images/pages/HomePage/Bgr_img.jpg')",
                'darkMountain_v2': "url('/images/pages/Partnership/darkMountain_v2.png')",
                'BigGameBtn': "url('/images/pages/HomePage/BigGameBtn.png')",
                'GoldStar': "url('/images/pages/HomePage/GoldStar.png')",
                'Bgr_pxRepeat': "url('/images/pages/HomePage/Bgr_pxRepeat.jpg')",
            }),
            gridTemplateRows: {
                'layout-page': 'auto 1fr auto',
            },
            margin: {
                '-5': '-0.3125rem',
                '-25': '-1.5625rem',
                '-30': '-1.875rem',
                '-45': '-2.8125rem',
                '-75': '-4.6875rem',
            },
            zIndex: {
                '100': '100',
            },
            spacing: {
                '30': '1.875rem',
                '57': '3.5625rem',
                '107': '6.6875rem',
                '125': '7.8125rem',
                '195': '12.1875rem',
                '312': '19.5rem',
                '320': '20rem',
                '235': '14.6875rem',
                '245': '15.3125rem',
                '253': '15.8125rem',
                '353': '22.0625rem',
                '290': '18.125rem',
                '420': '26.25rem'
            },
            width: {
                '57': '3.5625rem',
                '180': '40rem',
            },
            height: {
                '96/8': '24.875rem',
                '6/8': '6rem'
            },
            skew: {
                'n10': '-10deg',
                '10': '10deg',

            }
        },
        fontFamily: {
            'alot': 'a_love_of_thunderregular, sans-serif',
            'acp': 'Adobe Caslon Pro, sans-serif',
            'roboto-black': 'robotoblack, sans-serif',
            'roboto-bold': 'robotobold, sans-serif',
            'roboto-light': 'robotolight, sans-serif',
            'roboto-medium': 'robotomedium, sans-serif',
            'roboto-regular': 'robotoregular, sans-serif',
        },
        fontSize: {
            '14': '0.875rem',
            '16': '1rem',
            '18': '1.125rem',
            '20': '1.25rem',
            '28': '1.75rem',
            '40': '2.5rem',
            '50': '3.5rem',
            '54': '3.375rem',
            '75': '4.6875rem',
            '90': '5.625rem',
            '95': '5.9375rem',
            ...defaultTheme.fontSize
        },
        letterSpacing: {
            '4': '0.25rem'
        },
        zIndex: {
            'c1': 1,
            ...defaultTheme.zIndex
        }
    },
    variants: {
        extend: {},
        fill: ['hover', 'focus'],
    },
    plugins: [],
}
