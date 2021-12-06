import '../styles/globals.css'
import Layout from "../components/layout/layout";
import React from "react";
import Head from 'next/head'
import HeadUtil from "../components/head/headUtil";


function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <HeadUtil
                title='Wiener Games'
                description='Wiener Games produces high quality online casual & casino games.
                We create amazing concepts, artwork, 2D & 3D animations.
                We provide Cross-platform development and all of our games are playable on multiple devices.'/>
            <Component {...pageProps} />
        </Layout>
    )

}

export default MyApp
