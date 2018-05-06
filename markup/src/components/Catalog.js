import React, { Component } from 'react'
import styles from '../styles/Catalog.module.css'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

class Catalog extends Component {


    render() {
        return <div className={styles.catalog}>
                    <Link className={styles.catalog__link} to="/kitchen">Кухни</Link>
                    <a className={styles.catalog__link} href="">Спальни</a>
                    <a className={styles.catalog__link} href="">Подъемные кровати</a>
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
