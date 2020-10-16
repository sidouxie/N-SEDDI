import React, { useEffect } from 'react'
import Aos from 'aos'

const InfoSection = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <div>
            <div className="info-section">
            <div className="info-container">
                <div data-aos="fade-up" className="section-title">
                    <h2>nous aimerons vous entendre !</h2>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="section-text">
                    <p>Vous pouvez nous joindre aux adresses ci-dessous ou contacter directement l'expert spécifique Les demandes de presse doivent être adressées à <strong>cabinet.n.seddi.cac@gmail.com</strong> ou au <strong>+213 673 78 26 90</strong></p>
                </div>
            </div>
            </div>
            
            <div className="map-section">
                <div className="cabinet-section">
                    <div className="img-cabinet"><div className="overlay"></div></div>
                    <div className="section-info-text">
                        <h4 data-aos="fade-down">CABINET N.SEDDI</h4>
                        <p data-aos="fade-left" data-aos-delay="50">240 LOGEMENTS BT 14 N 2 LES GRANDS VENTS DELLY IBRAHIM ALGER</p>
                        <p data-aos="fade-left" data-aos-delay="100"><strong>PHONE : </strong> +213 673 78 26 90</p>
                        <p data-aos="fade-left" data-aos-delay="100"><strong>é-mail</strong> CABINET.N.SEDDI.CAC@GMAIL.COM</p>
                    </div>
                </div>
                <div className="mapping"></div>
            </div>
        </div>
    )
}

export default InfoSection
