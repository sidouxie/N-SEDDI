import React from 'react'
import Link from 'next/link'
import {FaBars} from 'react-icons/fa'

const Menu = ({ toggle }) => {
    return (
        <>
            <header>
            <nav>
                <div className="section-logo">
                    <Link href="/"><a><span><img src="/static/seddi_logo.svg" alt="logo N.SEDDI"/></span></a></Link>
                </div>
                
                    <div className="section-links">
                        <Link href="/"><a>Accueil</a></Link>
                        <Link href="/"><a>Présentation</a></Link>
                        <Link href="/services"><a>Services</a></Link>
                        <Link href="/contact"><a className="btn-link">Contact</a></Link>
                    </div>
                    <div className="mobile-icone" onClick={toggle}>
                        <FaBars color={"#fff"} size={26} />
                    </div>
            </nav>
            </header>
        </>
    )
}

export default Menu
