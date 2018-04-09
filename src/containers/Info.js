import React, { Component } from 'react'
import styles from '../styles/Info.module.css'

class Info extends Component {
    render() {
        return <section className={styles.container}>

            <div className={styles.phone}>
                <div>
                    <h2 className={styles.phone__title}>+7 (911) 743 44 23</h2>
                    <p className={styles.phone__text}>Ежедневно с 10:00-22:00</p>
                </div>
            </div>

            <div className={styles.call}>
                <div className={styles.call__circle}>
                    <div className={styles.backCall__img}></div>
                </div>
                <a className={styles.call__text}>Обратный звонок</a>
            </div>

            <div className={styles.call}>
                <div className={styles.call__circle}>
                    <div className={styles.callMaster__img}></div>
                </div>
                <a className={styles.call__text}>Вызов замерщика</a>
            </div>

        </section>
    }
}

export default Info