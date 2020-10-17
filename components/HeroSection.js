import React from 'react'


const HeroSection = ({data}) => {
    return (
        <div className="main">
            <div className="hero-container">
                <div className="hero-bg"></div>
            </div>
            <div className="section-title">
                <h1>{data.title}</h1>
                <span>{data.subtitle}</span>
            </div>
            <span className="icon-bot">
                <img src="/static/icones/icone_bot.svg" alt="icon bottom"/>
            </span>
        </div>
    )
}

export default HeroSection
