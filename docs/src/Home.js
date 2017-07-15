import React from 'react'
import { createView } from 'rrx'
import { Container } from 'rebass'
import NavBar from './NavBar'
import Header from './Header'
import About from './About'
import Features from './Features'
import Testimonials from './Testimonials'
import Demo from './Demo'
import Colors from './Colors'
import TypographicScale from './TypographicScale'
import GridStyled from './GridStyled'
import Props from './Props'
import Configuration from './Configuration'
import Customizing from './Customizing'
import Components from './Components'
import CTA from './CTA'
import Footer from './Footer'

const Home = props => (
  <div>
    <NavBar />
    <Header />
    <About />
    <Features />
    <Testimonials />
    <Demo />
    <Props />
    <Colors />
    <TypographicScale />
    <GridStyled />
    <Configuration />
    <Customizing />
    <Components />
    <CTA />
    <Footer />
  </div>
)

export default createView(Home)
