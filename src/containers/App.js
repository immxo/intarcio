import React, { Component } from 'react'
import Catalog from "./Catalog";
import About from "./About";
import HowWorks from "./HowWorks";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Header from "./Header";

class App extends Component {
    render() {
        return <div>
            <Header/>
            <Catalog />
            <About/>
            <HowWorks/>
            <Contacts/>
            <Footer/>
        </div>
    }
}

export default App
