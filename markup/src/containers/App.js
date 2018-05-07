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
import { AnimatedSwitch } from 'react-router-transition';

class App extends Component {
    render() {

        const {modalIsOpen, display, title, notificationIsOpen, text} = this.props.modal
        const {openModal , closeModal, openNotification, closeNotification} = this.props.modalAction
        return(

        <Router>
            <div>
                <Header modalIsOpen={modalIsOpen} display={display} title={title} notificationIsOpen={notificationIsOpen}
                        text = {text} openModal={openModal} closeModal={closeModal} openNotification={openNotification}
                        closeNotification={closeNotification}
                />
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    mapStyles={(styles) => ({
                        opacity: `opacity(${styles.opacity}%)`,
                        transitionDuration: '10000'
                    })}
                    className="route-wrapper"
                >
                    <Route path="/kitchen" component={Kitchen} />
                    <Route path="/bedroom" component={Bedroom} />
                </AnimatedSwitch>
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
