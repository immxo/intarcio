import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import About from "../components/About";
import HowWorks from "../components/HowWorks";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {connect} from "react-redux";
import * as modalAction from '../actions/ModalAction'

class App extends Component {
    render() {
        const {modalIsOpen, display, title, notificationIsOpen, text} = this.props.modal
        const {openModal , closeModal, openNotification, closeNotification} = this.props.modalAction
        return <div>
            <Header modalIsOpen={modalIsOpen} display={display} title={title} notificationIsOpen={notificationIsOpen}
                    text = {text} openModal={openModal} closeModal={closeModal} openNotification={openNotification}
                    closeNotification={closeNotification}
            />
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
