import React, { Component } from 'react'
import styles from '../styles/Nav.module.css'

class Nav extends Component {
    render() {
        return <header className={styles.header}>
                    <div className={styles.logo}>
                        <h1 className={styles.logo__title}>Интарсия</h1>
                        <p className={styles.logo__text}>Корпусная мебель на заказ</p>
                    </div>

                    <nav className={styles.nav}>
                            <a href="/" className={styles.nav__link}>Главная</a>
                            <a href="" className={styles.nav__link}>О компании</a>
                            <a href="" className={styles.nav__link}>Как мы работаем</a>
                            <a href="" className={styles.nav__link}>Контакты</a>
                    </nav>
               </header>
    }
}

export default Nav
