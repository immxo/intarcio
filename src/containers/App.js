import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import Catalog from "./Catalog";
import About from "./About";
import HowWorks from "./HowWorks";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Header from "./Header";
import {connect} from "react-redux";
import * as modalAction from '../actions/ModalAction'

class App extends Component {
    render() {
        const {modalIsOpen, display, title} = this.props.modal
        const {openModal} = this.props.modalAction
        const {closeModal} = this.props.modalAction
        return <div>
            <Header modalIsOpen={modalIsOpen} display={display} title={title} openModal={openModal}
                    closeModal={closeModal}/>
            <Catalog/>
            <About/>
            <HowWorks/>
            <Contacts/>
            <Footer/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    }
}

function mapDispatchToProps(dispatch) {
    return {
        modalAction: bindActionCreators(modalAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
