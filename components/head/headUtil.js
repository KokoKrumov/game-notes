import React from 'react';
import Head from 'next/head'

function HeadUtil(props) {

    const {title, description} = props

    return (
        <Head>
            {
                title &&
                    <title>
                        {title}
                    </title>
            }
            {
                description &&
                    <meta
                        name='description'
                        content={description}
                    />
            }
            <meta name="keywords"
                  content="Online games, Casino games, Bulgarian game studio, Casual Games, Social Games, Online Slot machines, Scratch cards, Gambling online"/>
            <meta name="owner" content="Wiener Games Studio"/>
            <meta name="rating" content="general"/>
            <meta name="audience" content="all"/>
            <meta name="robots" content="index, follow"/>
            <link href="/fonts/roboto/stylesheet.css" rel="stylesheet"/>
            <link href="/fonts/aLoveOfThunder/stylesheet.css" rel="stylesheet"/>

        </Head>
    );
}

export default HeadUtil;
