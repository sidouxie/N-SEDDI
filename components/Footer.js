import React from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <footer>
            <div className="bg-footer">
                <div className="overlay"></div>

                <div className="container-footer">
                
                        <div className="footer-top">
                        <div className="logo-section">
                            <span><img src="/static/icones/seddi_logo.svg" alt="logo footer N.SEDDI" /></span>
                            </div>
                            <div className="link-section">
                                <Link href="/"><a>Présentation</a></Link>
                                <Link href="/services"><a>Services</a></Link>
                                <Link href="/contact"><a className="btn-links">Contacter</a></Link>
                            </div>
                            <div className="scroll-top">
                            <img src="/static/icones/icone_bot.svg" alt="icon bottom" onClick={toggleHome} />
                            </div>
                        </div>

                        <div className="footer-bot">
                            <div className="droit-section">
                                <div className="politique-conf">
                                    <span className="icon-conf"><img src="/static/icones/icone_PDC.svg" alt="icone politique de confidentialité"  /></span>
                                    <Link href="/politiques-de-confidentialite"><a>Politiques de confidentialité</a></Link>
                            </div>
                            
                            <div className="copy-section">
                                <span>TOUS DROITS RéServés @ 2020 N.SEDDI  |  Suivis nous aussi </span>
                                <span className="copy-icon"><a href="https://google.com" target="_blank" title="Linkedin"><FaLinkedinIn /></a></span>
                                <span className="copy-icon"><a href="https://google.com" target="_blank" title="Instagram"><FaInstagram /></a></span>
                            </div>
                            </div>
                            <div className="icon-section">
                                <div className="info-1">
                                    <span className="icon-info"><img src="/static/icones/icone_7.svg" alt="icone map" /></span>
                                    <span>240 logements bt 14 n 2 les grands vents <br/> delly ibrahim alger</span>
                            </div>
                            
                            <div className="info-2">
                                    <span className="icon-info"><img src="/static/icones/icone_8.svg" alt="icone envelop" /></span>
                                    <span>cabinet.n.seddi.cac@gmail.com</span>
                            </div>
                            
                            <div className="info-3">
                                    <span className="icon-info"><img src="/static/icones/icone_9.svg" alt="icone phone" /></span>
                                    <span>+213 673 78 26 90</span>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer
