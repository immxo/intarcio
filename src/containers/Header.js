import React, { Component } from 'react'
import styles from '../styles/Header.module.css'

class Header extends Component {
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
                    <button className={styles.button}>
                        <div className={styles.backCall__img}></div>
                        Обратный звонок
                    </button>

                    <button className={styles.button}>
                        <div className={styles.callMaster__img}></div>
                        Вызов замерщика
                    </button>
                </div>
            </header>
    }
}

export default Header