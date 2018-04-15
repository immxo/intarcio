import React, { Component } from 'react'
import styles from '../styles/Header.module.css'
import ModalReact from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    },
    overlay: {
        backgroundColor: 'RGBA(0, 0, 0, 0.5)'
    }
};



class Header extends Component {
    modalCallMaster() {
        this.props.openModal('master');
    }

    modalBackCall() {
        this.props.openModal('back');
    }


    onCloseModalBtnClick() {
        this.props.closeModal();
    }
    render() {
        return <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <h1 className={styles.logo__title}>Интарсия</h1>
                        <p className={styles.logo__text}>Корпусная мебель на заказ</p>
                    </div>

                    <div className={styles.phone}>
                        <div>
                            <h2 className={styles.phone__title}>+7 (911) 743 44 23</h2>
                            <p className={styles.phone__text}>Ежедневно с 10:00-22:00</p>
                        </div>
                    </div>

                    <nav className={styles.nav}>
                        <a href="/" className={styles.nav__link}>Главная</a>
                        <a href="" className={styles.nav__link}>О компании</a>
                        <a href="" className={styles.nav__link}>Как мы работаем</a>
                        <a href="" className={styles.nav__link}>Контакты</a>
                    </nav>
                </div>

                <div className={styles.slogan}>
                    <h1 className={styles.slogan__title}>Производство корпусной мебели – это<br/> специализация нашей компании</h1>
                </div>

                <div className={styles.containerButton}>
                    <button onClick={this.modalBackCall.bind(this)} className={styles.button}>
                        <div className={styles.backCall__img}></div>
                        Обратный звонок
                    </button>

                    <button onClick={this.modalCallMaster.bind(this)} className={styles.button}>
                        <div className={styles.callMaster__img}></div>
                        Вызов замерщика
                    </button>
                </div>

                <ModalReact
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.onCloseModalBtnClick.bind(this)}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className={styles.modal__container}>
                            <button className={styles.close} onClick={this.onCloseModalBtnClick.bind(this)}>X</button>
                            <h2 className={styles.modal__title}>{this.props.title}</h2>
                            <input className={styles.modal__input} type="text" placeholder='Ваше имя'/>
                            <input className={styles.modal__input} type="text" placeholder='+7-(xxx)-xxx-xx-xx '/>
                            <input style={{display: this.props.display}} className={styles.modal__input} type="text" placeholder='E-mail'/>
                            <textarea className={styles.modal__textarea}  cols="30" rows="10" placeholder='Комментарий'></textarea>
                            <button className={styles.modal__button}>
                                Отправить
                                <div className={styles.send__img}></div>
                            </button>
                    </div>
                </ModalReact>

            </header>

    }
}


export default Header