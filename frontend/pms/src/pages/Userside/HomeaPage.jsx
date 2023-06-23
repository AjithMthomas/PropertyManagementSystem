import React from 'react'
import  NavbarComponent from "../../components/UserSide/Navbar"
import Banner from '../../components/UserSide/Banner'
import Banner2 from '../../components/UserSide/Banner2'
import Banner3 from '../../components/UserSide/Banner3'
import Footer from '../../components/UserSide/Footer'


function HomeaPage() {
  return (
    <div>
     <NavbarComponent/>
     <Banner/>
     <Banner2/>
     <Banner3/>
     <Footer/>
    </div>
  )
}

export default HomeaPage