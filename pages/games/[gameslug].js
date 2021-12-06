import React, {useEffect, useState} from 'react';
import {getAllGames, getGameBySlug} from "../../helpers/utils";
import HeadUtil from "../../components/head/headUtil";
import SectionSignUp from "../../components/sections/section-sign-up";
import GameSections from "../../components/sections/game-sections"
import {useRouter} from 'next/router'
import Link from 'next/link'

function GameSlug({game}) {
    const router = useRouter().asPath.match(/#([a-z0-9]+)/gi)

    const [hash, setHash] = useState(router)

    function handleClick(hashPath) {
        setHash(hashPath)
        // console.log(hashPath);
    }

    if (!game) {
        return <p>No such game!</p>
    }

    return (
        <div>
            <HeadUtil title={game.title} description={game.description}/>
            {/*dot navigation*/}
            {/*<div className={'fixed top-1/2 right-32 transform -translate-y-1/2 z-50'}>*/}
            {/*    <div className={'flex flex-col items-center'}>*/}
            {/*        {game.sections.map((section, index) => (*/}
            {/*            <div key={index}>*/}
            {/*                <a*/}
            {/*                    href={`#${section.sectionSlug}`}*/}
            {/*                    onClick={() => handleClick(section.sectionSlug)}*/}
            {/*                    className={'inline-block py-9 px-3'}>*/}
            {/*                    <span className={`block bg-white rounded-full rounded  ${ hash === section.sectionSlug ? ' w-4 h-4' : ' w-2 h-2'}`}/>*/}
            {/*                </a>*/}

            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/* /dot navigation*/}


            {/*the default main three main sections*/}
            <div className={'z-30 relative'}>

                {game.sections.map((section, index) =>
                    (
                        <div key={index}>
                            {GameSections(section)}
                        </div>
                    )
                )}

            </div>
            {/* ?the default main three main sections*/}
            <SectionSignUp/>
        </div>
    );
}

export async function getStaticProps(context) {
    //getting props by building time
    //'gameId' is the identifier of the of the file name
    const gameslug = context.params.gameslug;
    const selectedGame = getGameBySlug(gameslug) ? getGameBySlug(gameslug) : null;
    return {
        props: {
            game: selectedGame
        },
        //one hour
        revalidate: 3600
    }
}

export async function getStaticPaths(context) {
    //generate paths for all games by their id's
    const games = getAllGames()
    const paths = games.map(game => ({params: {gameslug: game.slug}}))
    return {
        paths: paths,
        //wait for non-build static page
        fallback: 'blocking'
    }
}

export default GameSlug;
