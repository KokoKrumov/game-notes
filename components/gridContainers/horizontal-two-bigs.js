import React from 'react';
import CardServiceSocialGaming from '../cards/card-sevice-social-gaming';
import CardServiceCasinoGames from '../cards/card-sevice-casino-games';
import CardServiceGraphics from '../cards/card-sevice-graphics';
import CardServiceAnimation from '../cards/card-sevice-animation';
import CardServiceDevelopment from '../cards/card-sevice-development';
import CardServiceConcepts from '../cards/card-sevice-concepts';

function HorizontalTwoBigs({services = []}) {

    if (!services) {
        return (
            <p>Loading New Services...</p>
        )
    }

    return (
            <div>
                <div className={'grid grid-rows-2 grid-cols-2 gap-16'}>
                    <CardServiceSocialGaming 
                        serviceImage = 'url(/images/pages/Services/SocialGaming.png)'
                        title = 'Social '
                        titleWhite = "Gaming"
                        serviceDesc = "In the last few years the social interactivity through Internet has become a part of almost everybody’s life. With platforms like Facebook, Twitter and so on we are connected to the rest of the world through every window of our technic – computers, mobile phones, even TVs. In a world that wants to share everything we are determined to create games and platforms for interactive social gaming that can change the way people look at gambling. With multiplayer games, related to hundreds of people and social sharing in a lot of different and interesting ways we want to be a part of this newly opened social interactive world."
                    />
                     <CardServiceCasinoGames
                        serviceImage = 'url(/images/pages/Services/casinoGames.png)'
                        title = 'Casino '
                        titleWhite = "Games"
                        serviceDesc = "The main focus of our studio are casino games. Not only the well-known Poker, Roulette and Slot games but also new, interesting, addicting, social and good looking gambling games. We have a lot of creative ideas how to improve what’s already on the market and how to introduce completely new ideas and game types."
                    />
                    <CardServiceGraphics
                        serviceImage = 'url(/images/pages/Services/graphics2D_3D.png)'
                        title = 'Graphics '
                        titleWhite = "(2D/3D)"
                        serviceDesc = "We provide our clients very high quality graphics both 2D and 3D. Our 2D artists are capable of creating specific assets for different art styles – no matter if it’s cartoon, realistic, colorful or dark – we can handle it! The quality of our 3D artwork is guaranteed by a team that has experience in blockbuster movies, standalone games and online interactive applications."
                    />
                    <CardServiceAnimation 
                        serviceImage = 'url(/images/pages/Services/Animation2D_3D.png)'
                        title = 'Animation '
                        titleWhite = "(2D/3D)"
                        serviceDesc = "The combined years of experience in our animators team can make even the Cheops Mummy feel young! They are equally good from classic timeline based 2D animations to amazing 3D movies full of high quality effects, eye candies and glitter."
                    />
                    <CardServiceDevelopment
                        serviceImage = 'url(/images/pages/Services/Development.png)'
                        title = 'Development'
                        serviceDesc = "As most of the developers you’ve seen on the Internet’s photos stash, our developers are 24/7 working robots determined to create the best game ever made and to win eternal glory by doing so. They have tons of knowledge collected through the years and their hunger to learn even more gives us the ability to develop in every direction we want and to fulfill every twisted idea for a game we can think of!"
                    />
                    <CardServiceConcepts 
                        serviceImage = 'url(/images/pages/Services/Concepts.jpg)'
                        title = 'Concepts'
                        serviceDesc = "We have done our best to get in one place a team complete enough to be able to create a full game only based on a given idea. Just to give them a theme is enough for them to create a fully described game flow, complete art and animations concepts, sound package based on the game, the graphics and the overall feeling of the game, multiple bonus feature ideas and user interactions, social planning and integration and finally to develop a game that completely fulfills the idea and creates an experience that will be highly entertaining for the users."
                    />
                </div>
            </div>
    );
}

export default HorizontalTwoBigs;
