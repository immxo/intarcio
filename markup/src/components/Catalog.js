import React, { Component } from 'react'
import styles from '../styles/Catalog.module.css'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Scrollchor from 'react-scrollchor';

class Catalog extends Component {


    render() {
        return <div className={styles.catalog}>
                    <span id='catalog'></span>
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
                </div>
    }
}

export default Catalog
