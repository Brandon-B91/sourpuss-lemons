import React from 'react'
import ContactForm from './ContatctForm'
import { StaticImage } from 'gatsby-plugin-image';
import { IconContext } from "react-icons";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";




const footer = {
  minHeight: '10rem',
  background: 'var(--sitePink)',
  border: '.25rem solid var(--siteYellow)',
  padding: '1rem 2rem',
  color: 'black'
}

const container = {
  maxWidth: '80%',
  margin: '0 auto'
}

const footerHeader = {
  fontSize: 'var(--fontMd)',
  color: 'var(--black)',
  textAlign: 'center'
}

const Footer = () => {
  return (
    <footer className="footer" style={footer}>
      <div stlye={container}>
        <p className='footerP' style={footerHeader}>
          Connect with us on our socials.
        </p>
        <div className="row">
          <div className="col">
            <StaticImage
            src="../images/header-logo.png"
            alt="sourpuss lemonade"
            width={300}
            height={300}
            />
          </div>
          <div className="col">
            <IconContext.Provider value={{ color: "white", size: '3rem' }}>
            <a href="https://www.instagram.com/sourpusslemons/" target="_blank">
            <FaInstagramSquare />
            
            </a>
            <a href="https://www.facebook.com/sourpusslemons/" target="_blank">
              <FaFacebookSquare />
            </a>
            <a href="mailto:sourpusslemons@gmail.com">
              <FaEnvelope />
            </a>
            </IconContext.Provider>
          </div>
          <div className="col">
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer