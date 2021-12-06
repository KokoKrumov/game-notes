import React from 'react';
import ListHorizontal from "../../components/lists/list-horizontal";
import {getAllGames} from "../../helpers/utils";
import Sort from "../../components/filters/sort";
import {useRouter} from "next/router";
import H2Colored from "../../components/typography/h2Colored";
import FilterNavigation from "../../components/filters/filter-navigation";

function Games(props) {
    const games = props.games
    const router = useRouter()

    // function findGames(year, month) {
    //     const fullPath = `/games/${year}/${month}`
    //     router.push(fullPath)
    // }

    return (
        <div className={'z-20 relative'}
        style={{
            backgroundImage: 'url(/images/pages/HomePage/Bgr_img.jpg), url(/images/pages/HomePage/Bgr_pxRepeat_updated.jpg)',
            backgroundRepeat: 'no-repeat, repeat-y',
            backgroundSize: 'contain, contain'
        }}
            >
            <div
         className={'container 4xl:max-w-screen-2xl mx-auto pb-16'}>
                <H2Colored
                    classes={'pt-16 pb-4 text-center'}
                    firstSentence={'social &'}
                    secondSentence={'casino games'}/>
                <div className={'w-2/3 mx-auto'}>
                    <p className={'font-roboto-regular text-base text-silver'}>
                        We are experienced architects and developers in the field of HTML5 slot games & Casual to
                        mid-core social games (using Frameworks like Phaser and PixiJS), NodeJS, MYSQL, PHP,
                        iOS/Android, Actionscript, HTML/CSS, Javascript
                    </p>
                </div>
                <div>
                    <FilterNavigation />
                </div>
                <section className={'p-4'}>
                    <ListHorizontal games={games}/>
                </section>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const allGames = await getAllGames()
    return {
        props: {
            games: allGames
        },
        revalidate: 60
    }
}

export default Games;
