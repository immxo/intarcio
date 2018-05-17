import React, { Component } from 'react'
import axios from 'axios';
import ModalReact from 'react-modal';
import InputMask from 'react-input-mask';
import styles from '../styles/Header.module.css'
import Notification from "./Notification";

const customStyles = {
    content: {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        opacity: '1'
    },
    overlay: {
        backgroundColor: 'RGBA(0, 0, 0, 0.5)'
    },
    afterOpen: {
        opacity: '1',
        transition: 'opacity 1s'
    }
};

class ModalOrder extends Component {
    state = {
        name: '',
        tel: '',
        email: '',
        comment: ''
    };



    closeOrder(){
        this.props.closeOrder();
    }

    onChangeName(e){
        let val = e.target.value;
        this.setState({name: val})
    }

    onChangeTel(e){
        let val = e.target.value;
        this.setState({tel: val})
    }

    onChangeComment(e){
        let val = e.target.value;
        this.setState({comment: val})
    }

    openNotification(bool){
        this.props.openNotification(bool);
    }

    handleSubmit(e, source) {
        let self = this;
        e.preventDefault();
        const data = {
            name: this.state.name,
            tel: this.state.tel,
            email: this.state.email,
            comment: this.state.comment,
            source: source
        };
        axios.post('http://xn--80apbshkhf.xn--p1ai/orders/insert', data)
            .then(function (res) {
                self.closeOrder();
                if (res.data.status) {
                    self.openNotification(true);
                }
                else {
                    self.openNotification(false);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return(
            <div>
            <ModalReact
                isOpen={this.props.orderIsOpen}
                onRequestClose={this.closeOrder.bind(this)}
                style={customStyles}
            >
                <div className={styles.modal__container}>
                    <button className={styles.close} onClick={this.closeOrder.bind(this)}>X</button>
                    <input className={styles.modal__input} type="text" value={this.state.name}
                           onChange={e=>this.onChangeName(e)} placeholder='Ваше имя'/>
                    <InputMask className={styles.modal__input} type="text" placeholder='+7-(xxx)-xxx-xx-xx'
                               value={this.state.tel} onChange={e=>this.onChangeTel(e)} mask="+7 (999)-999-99-99"
                               maskChar="" />
                    <textarea className={styles.modal__textarea} value={this.state.comment}  cols="30" rows="10"
                              onChange={e=>this.onChangeComment(e)} placeholder='Комментарий'></textarea>
                    <button className={styles.modal__button} onClick={e=>(this.handleSubmit(e, this.props.source))}>
                        Отправить
                        <div className={styles.send__img}></div>
                    </button>
                </div>
            </ModalReact>
                <Notification/>
            </div>
        )}
}

export default ModalOrder