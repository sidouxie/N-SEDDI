import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'


const Sidebar = ({ isopen, toggle }) => {
    return (
        <div className={`${!isopen ? 'sidebar-container active' : 'sidebar-container'}`} isopen={isopen} onClick={!toggle} >
            <span className="Icon" >
                <div className={`${!isopen ? 'close-icon active' : 'close-icon'}`} onClick={toggle}>
                    <FaTimes color="#fff" />
                </div>
            </span>
            <div className="sidebar-wrapper">
                    <div className="sidebar-menu">
                        <Link href="/"><a>Présentation</a></Link>
                        <Link href="/services"><a>Services</a></Link>
                        <Link href="/contact"><a>Contact</a></Link>
                </div>
            </div>

            <div className="info-sidebar">
            <span className="ligne-sidebar"></span>
                <div style={{ display: 'grid'}}>
                <span><strong>Mobile : </strong> +213 673 78 26 90</span>
                <span><strong>é-mail : </strong> cabinet.n.seddi.cac@gmail.com</span>
                <span>240 LOGEMENTS BT 14 N 2 LES GRANDS VENTS<br /> DELLY IBRAHIM ALGER</span>
               </div>
            </div>
        </div>
    )
}

export default Sidebar
