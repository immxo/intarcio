import React, { Component } from 'react'
import styles from '../styles/About.module.css'

class About extends Component {
    render() {
        return <section id='about' className={styles.about}>
           <h1 className={styles.title}>О компании</h1>
           <p className={styles.text}>Производство корпусной мебели – это специализация нашей компании. Наша компания
               занимается изготовлением корпусной мебели по индивидуальным проектам. Обратившись к нам Вы получите
               консультацию по подбору материала и дизайну вашей будущей мебели . Мы реализуем любую ваши идею в
               реальность.
           </p>
            <h2 className={styles.titleSmall}>Почему выгодно с нами сотрудничать:</h2>
            <ul>
                <li className={styles.textList}>Отсутствие высоких торговых наценок за счёт своего производства</li>
                <li className={styles.textList}> Индивидуальный подход при разработке проектов</li>
                <li className={styles.textList}>Гарантия один год на заказную мебель</li>
                <li className={styles.textList}>Высокое качество за счёт современного станочного оборудования</li>
            </ul>
        </section>
    }
}

export default About
