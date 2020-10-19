import React, { useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import HeroSection from '@components/HeroSection'
import Aos from 'aos'


const services = () => {

    const data = {
        title: "Services",
        subtitle: "Assistance et conseil lors de la création de votre société.",
        bghero: "wallpaper_3-min.jpg"
    }

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <Layout>
            <div style={{width : '100%',overflow : 'hidden'}}>
        <Head>
            <title>N.SEDDI - Services</title>
            <link rel="icon" href="/static/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Montserrat:wght@100;300;400;600;700&display=swap" rel="stylesheet" />        
        </Head>

                <HeroSection data={data} />
                
                <h2 data-aos="fade-up" style={{textAlign:"center",color:'#00999d', fontSize:"1.8rem"}}>Conseils en Gestion</h2>
                
                <div className="service-container">
                    <div className="section-serv">
                        <div data-aos="fade-left" data-aos-delay="100" className="sec-title">
                            <span><img src="/static/icones/icone_1.svg" alt="icone conseil en gestion" /></span>
                            <h3>Conseil en gestion générale : </h3>
                        </div>

                        <div data-aos="fade-right" data-aos-delay="100" className="section-text">
                            <ul>
                                <li>Gestion prévisionnelle.</li>
                                <li>Analyse de coûts, de marges, de rentabilité.</li>
                                <li>Projets d’investissement, coût et rentabilité.</li>
                                <li>Tableaux de bord, contrôle budgétaire.</li>
                                <li>Contribution à la protection du patrimoine de l’entreprise.</li>
                                <li>Étude d’optimisation du profil : Ratios de gestion.</li>
                            </ul>
                        </div>
                    </div>


                    <div className="section-serv">
                        <div data-aos="fade-left" data-aos-delay="100" className="sec-title">
                            <span><img src="/static/icones/icone_2.svg" alt="icone conseil en gestion" /></span>
                            <h3>Conseil en gestion financière : </h3>
                        </div>

                        <div data-aos="fade-right" data-aos-delay="100" className="section-text">
                            <ul>
                                <li>Analyse de gestion financière et de rentabilité.</li>
                                <li>Ratios financiers.</li>
                                <li>Techniques d’analyse et de gestion du fonds de roulement.</li>
                                <li>Systèmes de crédit, crédit-bail.</li>
                                <li>Prises de participation ( étude, assistance, réalisation pratique).</li>
                                <li>Constitution de dossiers de subventions, d’exonération de taxe 
professionnelle.</li>
                            </ul>
                        </div>
                    </div>


                    <div className="section-serv">
                        <div data-aos="fade-left" data-aos-delay="100" className="sec-title">
                            <span><img src="/static/icones/icone_3.svg" alt="icone conseil en gestion" /></span>
                            <h3>Relations avec les organismes bancaires et financièrs : </h3>
                        </div>

                        <div data-aos="fade-right" data-aos-delay="100" className="section-text">
                            <ul>
                                <li>Constitution de dossiers dans le cadre de créations et d’implantations 
d’entreprises.</li>
                                <li>Analyse de structure financière.</li>
                                <li>Établissement de plans de trésorerie.</li>
                                <li>Construction de plans de financement a moyen et long terme.</li>
                                <li>Choix des modes de financement et établissements de dossiers de crédit.</li>
                                <li>Tableau d’emplois et de ressources ( historique et prévisionnel).</li>
                                <li>Centrale des bilans.</li>
                            </ul>
                        </div>
                    </div>


                    <div className="section-serv">
                        <div data-aos="fade-left" data-aos-delay="100" className="sec-title">
                            <span><img src="/static/icones/icone_4.svg" alt="icone conseil en gestion" /></span>
                            <h3>Évaluation d’entreprises : </h3>
                        </div>

                        <div data-aos="fade-right" data-aos-delay="100" className="section-text">
                            <p>évaluation d’entreprises à partir de critères qui se veulent objectifs de leur valeur de marché potentiel ou de leur valeur patrimoniale.
Cette évaluation se caractérise par :</p>
                            <ul>
                                <li>Définition des enjeux de l’évaluation d’entreprise.</li>
                                <li>Méthode comptable patrimoniales et mixtes.</li>
                                <li>Méthodes d’analyse des flux.</li>
                                <li>Méthode comparative entre entreprises.</li>
                            </ul>
                        </div>
                    </div>
        </div>

                <div className="section-bg">
                    <div className="sec-img">
                        <img src="/static/images/wallpaper_2-min.jpg" alt="images comptabilité" />
                        <div className="overlay"></div>
                        <div data-aos="zoom-in" data-aos-delay="50" className="title">
                            <h2 data-aos="fade-in" data-aos-delay="100">Comptabilité</h2>
                        </div>
                    </div>
                    
                </div>

                <div className="service-container">
                    <div className="section-serv">
                        <div data-aos="fade-left" data-aos-delay="100" className="sec-title">
                            <span><img src="/static/icones/icone_5.svg" alt="icone conseil en gestion" /></span>
                            <h3>Contrôle des services comptables : </h3>
                        </div>

                        <div data-aos="fade-right" data-aos-delay="100" className="section-text">
                            <ul>
                                <li>Assistance comptable de toute nature.</li>
                                <li>Établissement des situations périodiques, des bilans et comptes de résultats.</li>
                                <li>Établissement de situations prévisionnelles et budgets de trésorerie.</li>
                                <li>Assistance du contribuable à l'occasion de vérification fiscale.</li>
                                <li>Assistance du contribuable à l’occasion de vérifications parafiscales.</li>
                                <li>Établissement des déclarations périodiques, de taxe professionnelle, impôt sur le revenu.</li>
                                <li>Études et consultations sur les problèmes d’ordre fiscal.</li>
                                <li>Procédures et Formalités D’embauche du personnel ( Déclaration unique d’embauche, Contrats de travail, bulletins de paie).</li>
                                <li>Réalisation de toutes opérations ( constitution).</li>
                                <li>Augmentation de capital, Cession de parts, Fusion, transformation.</li>
                                <li>Secrétariat de société : comptes-rendus de conseils d’administration et d’assemblées générales.</li>
                                <li>Rédaction des procès-verbaux d’assemblées.</li>
                                <li>Tenue des registres obligatoire léguax.</li>
                                <li>Consolidation des comptes et des bilans établissements des comptes du groupe.</li>
                                <li>Organisation, Surveillance, tenu de la comptabilité.</li>
                                <li>Prise en charge totale ou partielle de votre service comptable.</li>
                                <li>étude technico-économique tous type des sociétés et différents types de crédit.</li>
                                <li>Audit au service social interne.</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="section-bg">
                    <div className="sec-img">
                        <img src="/static/images/wallpaper_5-min.jpg" alt="images comptabilité" />
                        <div className="overlay"></div>
                        <div data-aos="zoom-in" data-aos-delay="50" className="title">
                            <h2 data-aos="fade-in" data-aos-delay="100">Commissariat aux comptes</h2>
                        </div>
                    </div>
                </div>


                <div className="service-container">
                    <div className="section-serv">
                        <div data-aos="fade-left" data-aos-delay="100" className="sec-title">
                            <span><img src="/static/icones/icone_6.svg" alt="icone conseil en gestion" /></span>
                            <h3>Commissariat aux comptes : </h3>
                        </div>

                        <div data-aos="fade-right" data-aos-delay="100" className="section-text">
                            <ul>
                                <li>Audit légal de certification des comptes annuels.</li>
                                <li>Vérification des procédures de contrôle interne.</li>
                                <li>À la transformation des sociétés.</li>
                                <li>À la fusion de sociétés.</li>
                                <li>À la cession de sociétés.</li>
                            </ul>
                        </div>
                    </div>
                </div>
      </div>
    </Layout>
    )
}

export default services
