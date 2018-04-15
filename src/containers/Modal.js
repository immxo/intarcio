import React, { Component } from 'react'
import ModalReact from 'react-modal';


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};


class Modal extends Component {

    onOpenModalBtnClick() {
        this.props.openModal();
    }


    onCloseModalBtnClick() {
        this.props.closeModal();
    }

    render() {
        return (
            <div>
                <button onClick={this.onOpenModalBtnClick.bind(this)}>Open Modal</button>
                <ModalReact
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.onCloseModalBtnClick.bind(this)}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={this.onCloseModalBtnClick.bind(this)}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </ModalReact>
            </div>
        );
    }
}

export default Modal
