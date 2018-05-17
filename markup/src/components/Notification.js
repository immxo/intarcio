import React, { Component } from 'react'
import ModalReact from 'react-modal';
import styles from '../styles/Header.module.css'

const customStyles = {
    content: {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        opacity               : '1',
    },
    overlay: {
        backgroundColor: 'RGBA(0, 0, 0, 0.5)'
    },
    afterOpen: {
        opacity: '1',
        transition: 'opacity 1s'
    }
};

class Notification extends Component {

    closeNotification(){
        this.props.closeNotification();
    }

    render() {
        return (
            <ModalReact
                isOpen={this.props.notificationIsOpen}
                onRequestClose={this.closeNotification.bind(this)}
                style={customStyles}
            >
                <div className={styles.modal__container}>
                    <button className={styles.close} onClick={()=>this.closeNotification}>X</button>
                    <p>{this.props.text}</p>
                </div>
            </ModalReact>
        )
    }
}

export default Notification
