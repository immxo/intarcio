import React, { Component } from 'react'
import axios from 'axios';
import Catalog from "./Catalog";
import styles from '../styles/Header.module.css'
import ModalReact from 'react-modal';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Scrollchor from 'react-scrollchor';

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



class Header extends Component {
    state = {
        name: '',
        tel: '',
        email: '',
        comment: ''
    };

    modalCallMaster() {
        this.props.openModal('master')
    }

    modalBackCall() {
        this.props.openModal('back')
    }


    onCloseModalBtnClick() {
        this.props.closeModal()
    }

    openNotification(bool){
        this.props.openNotification(bool)
    }

    closeNotification(){
        this.props.closeNotification()
    }

    onChangeName(e){
        let val = e.target.value
        this.setState({name: val})
    }

    onChangeTel(e){
        let val = e.target.value
        this.setState({tel: val})
    }

    onChangeEmail(e){
        let val = e.target.value
        this.setState({email: val})
    }

    onChangeComment(e){
        let val = e.target.value
        this.setState({comment: val})
    }

    toggleMenu(bool){
        this.props.toggleMenu(bool)
    }

    handleSubmit(e, source){
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
                self.onCloseModalBtnClick();
                if(res.data.status){
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
        return <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <a href="/" className={styles.logoLink}>
                            <h1 className={styles.logo__title}>Интарсия</h1>
                            <p className={styles.logo__text}>Корпусная мебель на заказ</p>
                        </a>
                    </div>

                    <div className={this.props.toggle ? 'src-styles-__Header-module___menu__icon-open' :
                        'src-styles-__Header-module___menu__icon'} onClick={()=>this.toggleMenu(this.props.toggle)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={styles.phone}>
                        <div>
                            <h2 className={styles.phone__title}>+7 (911) 743 44 23</h2>
                            <p className={styles.phone__text}>Ежедневно с 10:00-22:00</p>
                        </div>
                    </div>

                    <nav className={styles.nav}>
                        <a href='/' className={styles.nav__link}>Главная</a>
                        <Scrollchor to="#about" animate={{  duration: 400 }} className={styles.nav__link}>
                            <a>О компании</a>
                        </Scrollchor>
                        <Scrollchor to="#howWeWorks" animate={{  duration: 400 }} className={styles.nav__link}>
                            <a>Как мы работаем</a>
                        </Scrollchor>
                        <Scrollchor to="#contacts" animate={{  duration: 400 }} className={styles.nav__link}>
                            <a>Контакты</a>
                        </Scrollchor>
                    </nav>

                </div>

                <nav className={this.props.toggle ? 'src-styles-__Header-module___navMobile' :
                    'src-styles-__Header-module___hidden'}>
                    <Scrollchor to="#catalog" animate={{  duration: 400 }} className={styles.catalog__link}>
                        <Link  to="/kitchen" className={styles.catalog__link}>Кухни</Link>
                    </Scrollchor>
                    <Scrollchor to="#catalog" animate={{  duration: 400 }} className={styles.catalog__link}>
                        <Link  to="/bedroom" className={styles.catalog__link}>Спальни</Link>
                    </Scrollchor>
                    <Link  to="/kitchen" className={styles.catalog__link}>Подъемные кровати</Link>
                    <a className={styles.catalog__link} href="">Гостиные</a>
                    <a className={styles.catalog__link} href="">Шкафы</a>
                    <a className={styles.catalog__link} href="">Гардеробные</a>
                    <a className={styles.catalog__link} href="">Прихожие</a>
                    <a className={styles.catalog__link} href="">Детская мебель</a>
                    <a className={styles.catalog__link} href="">Торговые острова</a>
                    <a className={styles.catalog__link} href="">Еще <i className="fas fa-caret-down"></i></a>
                </nav>

                <div className={this.props.toggle ? 'src-styles-__Header-module___hidden' :
                    'src-styles-__Header-module___slogan'}>
                    <h1 className={styles.slogan__title}>Производство корпусной мебели – это<br/> специализация нашей компании</h1>
                </div>

                <div className={styles.containerButton}>
                    <button onClick={this.modalBackCall.bind(this)} className={this.props.toggle ?
                        'src-styles-__Header-module___hidden' : 'src-styles-__Header-module___button'}>
                        <div className={styles.backCall__img}></div>
                        <p className={styles.button__text}>Обратный звонок</p>
                    </button>

                    <button onClick={this.modalCallMaster.bind(this)} className={this.props.toggle ?
                        'src-styles-__Header-module___hidden' : 'src-styles-__Header-module___button ' +
                        'src-styles-__Header-module___marginLeft'}>
                        <div className={styles.callMaster__img}></div>
                        <p className={styles.button__text}>Вызов замерщика</p>
                    </button>
                </div>
            </div>

                <ModalReact
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.onCloseModalBtnClick.bind(this)}
                    style={customStyles}
                >
                    <div className={styles.modal__container}>
                            <button className={styles.close} onClick={this.onCloseModalBtnClick.bind(this)}>X</button>
                            <h2 className={styles.modal__title}>{this.props.title}</h2>
                            <input className={styles.modal__input} type="text" value={this.state.name}
                                   onChange={e=>this.onChangeName(e)} placeholder='Ваше имя'/>
                            <input className={styles.modal__input} type="text" value={this.state.tel}
                                   onChange={e=>this.onChangeTel(e)} placeholder='+7-(xxx)-xxx-xx-xx '/>
                            <input style={{display: this.props.display}} value={this.state.email}
                                   className={styles.modal__input} type="text"
                                   onChange={e=>this.onChangeEmail(e)} placeholder='E-mail'/>
                            <textarea className={styles.modal__textarea} value={this.state.comment}  cols="30" rows="10"
                                      onChange={e=>this.onChangeComment(e)} placeholder='Комментарий'></textarea>
                            <button className={styles.modal__button} onClick={e=>(this.handleSubmit(e, this.props.source))}>
                                Отправить
                                <div className={styles.send__img}></div>
                            </button>
                    </div>
                </ModalReact>

                <ModalReact
                    isOpen={this.props.notificationIsOpen}
                    onRequestClose={this.onCloseModalBtnClick.bind(this)}
                    style={customStyles}
                >
                    <div className={styles.modal__container}>
                        <button className={styles.close} onClick={this.closeNotification.bind(this)}>X</button>
                        <p>{this.props.text}</p>
                    </div>
                </ModalReact>

                <Catalog/>
            </header>

    }
}


export default Header