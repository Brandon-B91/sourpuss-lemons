import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MenuBoard from './MenuBoard'
import LotusBanner from './LotusBanner'
import SpecialtyBoard from './SpecialtyBoard'
import LocationMap from './LocationMap'
import Schedule from './Schedule'

const Layout = ({ children }) => {
  return (
    <>
         <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
      <Header></Header>
      <div className="container" id="content">
        <div>{children}</div>
        <>
        <MenuBoard />
        <SpecialtyBoard />
        <LotusBanner />
        <Schedule />
        </>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Layout