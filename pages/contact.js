import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import HeroSection from '@components/HeroSection'


const contact = () => {

    const data = {
        title: "Contact",
        subtitle: "",
        bghero: "wallpaper_contact-08-min.jpg"
    }

    return (
        <Layout>
            <div style={{width : '100%',overflow : 'hidden'}}>
        <Head>
            <title>N.SEDDI - Commissaire aux compte comptable agrée à Alger</title>
            <link rel="icon" href="/static/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Montserrat:wght@100;300;400;600;700&display=swap" rel="stylesheet" />        
        </Head>

        <HeroSection data={data} />
      </div>
    </Layout>
    )
}

export default contact
