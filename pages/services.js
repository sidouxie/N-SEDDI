import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

const services = () => {
    return (
        <Layout>
            <div style={{width : '100%',overflow : 'hidden'}}>
        <Head>
            <title>N.SEDDI - Services</title>
            <link rel="icon" href="/static/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Montserrat:wght@100;300;400;600;700&display=swap" rel="stylesheet" />        
        </Head>

        <h1>SERVICES PAGE</h1>
      </div>
    </Layout>
    )
}

export default services
