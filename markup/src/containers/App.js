import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import About from "../components/About";
import HowWorks from "../components/HowWorks";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Kitchen from "../components/Kitchen";
import Bedroom from "../components/Bedroom";
import {connect} from "react-redux";
import * as modalAction from '../actions/ModalAction'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
    render() {

        const {modalIsOpen, display, title, notificationIsOpen, text, source, orderIsOpen} = this.props.modal
        const {openModal , closeModal, openNotification, closeNotification, openOrder, closeOrder} = this.props.modalAction
        return(

        <Router>
            <div>
                <Header modalIsOpen={modalIsOpen} display={display} title={title} notificationIsOpen={notificationIsOpen}
                        text={text} source={source} openModal={openModal} closeModal={closeModal}
                        openNotification={openNotification} closeNotification={closeNotification}
                />
                <Route path="/kitchen"
                       render={(props) => <Kitchen {...props} orderIsOpen={orderIsOpen} source={source}
                                                   openOrder={openOrder} closeOrder={closeOrder}
                                                   openNotification={openNotification}
                                                   closeNotification={closeNotification}
                                                   notificationIsOpen={notificationIsOpen} text={text}/>}
                />
                <Route path="/bedroom"
                       render={(props) => <Bedroom {...props} orderIsOpen={orderIsOpen} source={source}
                                                   openOrder={openOrder} closeOrder={closeOrder}
                                                   openNotification={openNotification}
                                                   closeNotification={closeNotification}
                                                   notificationIsOpen={notificationIsOpen} text={text}/>}
                />
                <About/>
                <HowWorks/>
                <Contacts/>
                <Footer/>
            </div>
        </Router>
        )}
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
