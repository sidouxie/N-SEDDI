import React, {useEffect} from 'react'
import Link from 'next/link'
import Aos from 'aos'

const ServiceSection = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <div className="service-section">
            <div data-aos="fade-up" className="barre-section">
                <h3>Services</h3>
            </div>
            <div className="service-box">
                <div data-aos="zoom-in" className="box-1">
                    <div className="box-overlay"></div>
                    <Link href="/services" ><a data-aos="fade-in" data-aos-delay="100">Conseils en Gestion</a></Link>
                </div>

                <div data-aos="zoom-in" data-aos-delay="100" className="box-2">
                    <div className="box-overlay2"></div>
                    <Link href="/services" ><a data-aos="fade-in" data-aos-delay="150">Comptabilité</a></Link>
                </div>

                <div data-aos="zoom-in" data-aos-delay="200" className="box-3">
                    <div className="box-overlay3"></div>
                    <Link href="/services" ><a data-aos="fade-in" data-aos-delay="200" >Commissiariat aux comptes</a></Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection
