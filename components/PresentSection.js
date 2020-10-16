import React, {useEffect} from 'react'
import Aos from 'aos'


const PresentSection = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <div className="present-section">
            <div className="present-container">
                <div data-aos="fade-up" className="present-title">
                    <h2>Présentation</h2>
                    <h4>Le Cabinet N.SEDDI</h4>
                </div>

                <div data-aos="fade-left" className="present-text">
                    <p>Le cabinet N. SEDDI exerce dans le domaine du commissariat aux comptes. La comptabilité et conseil en gestion.
                    Offre aux entreprises publiques ou privées dans tous les secteurs 
                    d’activité ( industriel, Commercial, Artisanal, Prestation de services, 
                    Profession libérale, Pharmacie, Import / Export ).
                    Et dans tous les domaines :</p>
                    
                    <ul data-aos="fade-right">
                        <li>Compatable.</li>
                        <li>Social.</li>
                        <li>Gestion.</li>
                        <li>Fiscal et juridique.</li>
                    </ul>

                    <p data-aos="fade-left">Nous sommes sur le terrain proches de nos clients et toujours à leur 
disposition notre souci essentiel est de tenir une relation personnalisée avec nos clients qui est pour la plupart dirigeant et chef d’entreprise.</p>
                </div>
            </div>            
        </div>
    )
}

export default PresentSection
