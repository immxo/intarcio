import React, { Component } from 'react'
import styles from '../styles/Contacts.module.css'

class Contacts extends Component {
    render() {
        return <section className={styles.contacts}>
            <h1 className={styles.title}>Контакты</h1>
            <div className={styles.container}>
                <div></div>
                <div className={styles.row}>
                    <input className={styles.contacts__input} type="text" placeholder='Ваше имя'/>
                    <input className={styles.contacts__input} type="text" placeholder='+7-(xxx)-xxx-xx-xx '/>
                    <input className={styles.contacts__input} type="text" placeholder='E-mail'/>
                    <textarea className={styles.contacts__textarea}  cols="30" rows="10" placeholder='Комменарий'></textarea>
                    <button className={styles.contacts__button}>
                        Отправить
                        <div className={styles.send__img}></div>
                    </button>
                </div>
                <div></div>
            </div>
        </section>
    }
}

export default Contacts
