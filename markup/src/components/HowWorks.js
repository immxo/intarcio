import React, { Component } from 'react'
import styles from '../styles/HowWorks.module.css'

class HowWorks extends Component {
    render() {
        return <section id='howWeWorks' className={styles.HowWorks}>
            <h1 className={styles.title}>Как мы работаем</h1>
            <div className={styles.container}>
                <div className={styles.howWorksItem}>
                    <div className={styles.smartphone__img}></div>
                    <p className={styles.text}>Консультации</p>
                </div>

                <div className={styles.howWorksItem}>
                    <div className={styles.ruler__img}></div>
                    <p className={styles.text}>Замер</p>
                </div>

                <div className={styles.howWorksItem}>
                    <div className={styles.design__img}></div>
                    <p className={styles.text}>Дизайн-проект</p>
                </div>

                <div className={styles.howWorksItem}>
                    <div className={styles.handtool__img}></div>
                    <p className={styles.text}>Расчет</p>
                </div>

                <div className={styles.howWorksItem}>
                    <div className={styles.nut__img}></div>
                    <p className={styles.text}>Изготовление</p>
                </div>

                <div className={styles.howWorksItem}>
                    <div className={styles.tools__img}></div>
                    <p className={styles.text}>Установка</p>
                </div>
            </div>
        </section>
    }
}

export default HowWorks
