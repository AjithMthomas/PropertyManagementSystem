import React from 'react'
import NavbarComponent from '../../components/UserSide/Navbar'
import Properties from '../../components/UserSide/Property'
import Footer from '../../components/UserSide/Footer'

function PropertiesList() {
  return (
    <div>
        <NavbarComponent/>
        <Properties/>
        <Footer/>
    </div>
  )
}

export default PropertiesList