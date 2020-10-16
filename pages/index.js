import Head from 'next/head'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import PresentSection from '../components/PresentSection'
import ServiceSection from '../components/ServiceSection'
import InfoSection from '../components/InfoSection'

export default function Home() {
  return (
    <Layout>
    <div>
      <Head>
        <title>N.SEDDI - Commissaire aux compte comptable agrée à Alger</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Montserrat:wght@100;300;400;600;700&display=swap" rel="stylesheet" />        
      </Head>

        <HeroSection />
        <PresentSection />
        <ServiceSection />
        <InfoSection />
      </div>
    </Layout>
  )
}
