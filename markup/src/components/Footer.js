import React, { Component } from 'react'
import styles from '../styles/Footer.module.css'
import Scrollchor from 'react-scrollchor';

class Footer extends Component {
    render() {
        return <footer className={styles.footer}>
                    <div>
                        <div className={styles.phone}>
                            <h2 className={styles.phone__title}>+7 (911) 743 44 23</h2>
                            <p className={styles.phone__text}>Ежедневно с 10:00-22:00</p>
                        </div>
                    </div>
                    <div className={styles.row}>
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

                        <div className={styles.vk}>
                            <a href='https://vk.com/intarcio' target='_blank'>
                                <div className={styles.vk__img}></div>
                            </a>
                            <a href='https://vk.com/intarcio' target='_blank' className={styles.vk__text}>Мы вконтакте</a>
                        </div>
                    </div>
                </footer>
    }
}

export default Footer
