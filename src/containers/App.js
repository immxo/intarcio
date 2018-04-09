import React, { Component } from 'react'
import Nav from './Nav'
import Info from './Info'
import Catalog from "./Catalog";
import Slider from "./Slider";
import About from "./About";
import HowWorks from "./HowWorks";
import Contacts from "./Contacts";
import Footer from "./footer";

class App extends Component {
    render() {
        return <div>
            <Nav />
            <Info />
            <Catalog />
            <Slider/>
            <About/>
            <HowWorks/>
            <Contacts/>
            <Footer/>
        </div>
    }
}

export default App
