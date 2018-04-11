import React, { Component } from 'react'
import styles from '../styles/Footer.module.css'

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
                            <a href="/" className={styles.nav__link}>Главная</a>
                            <a href="" className={styles.nav__link}>О компании</a>
                            <a href="" className={styles.nav__link}>Как мы работаем</a>
                            <a href="" className={styles.nav__link}>Контакты</a>
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
