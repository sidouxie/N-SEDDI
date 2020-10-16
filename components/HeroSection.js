import React from 'react'

const HeroSection = () => {
    return (
        <div className="main">
            <div className="hero-container">
                <div className="hero-bg"></div>
            </div>
            <div className="section-title">
                <h1>N.SEDDI</h1>
                <span>Commissaire aux compte comptable agrée</span>
            </div>
            <span className="icon-bot">
                <img src="/static/icones/icone_bot.svg" alt="icon bottom"/>
            </span>
        </div>
    )
}

export default HeroSection
