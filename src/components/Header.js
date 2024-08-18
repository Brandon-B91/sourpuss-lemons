import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


const headerStyle = {
    position: 'relative',
    backgroundColor: 'var(--black)',
    borderBottom: '6px solid var(--siteYellow)',
    height: '8rem',
    width: '100%,'
}

const headerImg = {
    position: 'absolute',
    top: '17%',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '2',
    animation: 'grow 4s 1s',
    width: '200px',
    height: '200px'
}

const Header = () => {
  return (
    <>
    <header style={headerStyle}>
        <StaticImage 
        src='../images/header-logo.png'
        alt='Sourpuss Lemonade'
        style={headerImg}
        />
    </header>
    <div className="hero-section">
        <StaticImage
        src='../images/hero-img.jpeg'
        alt='Sourpuss Lemonade stand'
        width={1600}
        height={800}
        />
    </div>
    </>
  )
}

export default Header