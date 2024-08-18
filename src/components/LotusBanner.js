import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const bannerContainer = {
    position: 'relative'
}

const lotusImg = {
    position: 'relative',
    width: '100%',
    padding: '1rem 0'
}

const glassP = {
    backdropFilter: 'blur(9px)',
    backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.15), rgba(255,255,255,0.15))',
    border: '.5px solid #f4f4f4',
    fontSize: 'var(--fontSm)',
    textTransform: 'capitalize',
    padding: '1rem',
    textAlign: 'center',
    color: 'var(--black)',
    fontWrap: 'wrap',
    position: 'absolute',
    top: '50%',
    right: '5%',
    transform: 'translateY(-50%)',
    minHeight: '10%',
    maxWidth: '35%',
}

const LotusBanner = () => {
    return (
        <>
            <div>
                <div style={bannerContainer}>
                    <StaticImage
                        src="../images/lotus-cans.webp"
                        alt="Lotus energy Drinks"
                        placeholder="blurred"
                        loading="lazy"
                        style={lotusImg}
                    />
                    <p style={glassP}>
                        We are excited to offer Plant power lotus energy drinks!
                    </p>
                </div>
            </div>
        </>
    )
}

export default LotusBanner