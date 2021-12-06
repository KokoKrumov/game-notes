import React from 'react';
import {getFilteredGames} from "../../helpers/utils";
import ListHorizontal from "../../components/lists/list-horizontal";
import Link from 'next/link'
import AlertError from "../../components/alerts/alert-error";
import HeadUtil from "../../components/head/headUtil";

function GameSlug(props) {
    if (props.hasError) {
        return (
            <div className={'container mx-auto'}>
                <AlertError text={'Invalid Filter!'}/>
                <Link href={'/games'}>Back to the Games</Link>
            </div>
        )
    }

    const filteredGames = props.filteredGames;

    if (!filteredGames) {
        return <p className={'text-center'}>Loading...</p>
    }


    if (!filteredGames || filteredGames.length === 0) {
        return (
            <div className={'container mx-auto'}>
                <AlertError text={'No events found for chosen filter!'}/>
                <Link href={'/games'}>Back to the Games</Link>
            </div>
        )
    }

    const games = filteredGames

    return (
        <div>
            <HeadUtil description={`Games in ${props.date.month} ${props.date.year}`} />
            <div className={'container mx-auto'}>
                <h1>
                    Games in {`${props.date.month} ${props.date.year}`}
                </h1>
                <section className={'p-4'}>
                    <ListHorizontal games={games}/>
                </section>
            </div>
        </div>
    );
}

export function getServerSideProps(context) {
    const {params} = context

    const filteredData = params.slug

    const filteredYear = filteredData[0]
    const filteredMonth = filteredData[1]
    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 1 ||
        numMonth > 12 ||
        numMonth < 1
    ) {
        return {
            props: {
                hasError: true
            }
            // notFound: true,
            // redirect: {
            //     destination: '/error'
            // }
        }
    }

    const filteredGames = getFilteredGames({
        year: numYear,
        month: numMonth
    })


    return {
        props: {
            filteredGames: filteredGames,
            date: {
                year: numYear,
                month: numMonth
            }
        }
    }
}

export default GameSlug;
