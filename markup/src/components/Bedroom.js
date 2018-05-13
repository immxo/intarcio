import React, { Component } from 'react'
import styles from '../styles/Bedroom.module.css'
import ModalOrder from './ModalOrder'

class Bedroom extends Component {

    openOrder(type) {
        this.props.openOrder(type);
    }

    render() {
        return (
            <section className={styles.bedroom}>
                <div className={styles.bedroom__container}>
                    <h2 className={styles.bedroom__title}>Мебель для спальни на заказ от мебельного производства Интарсия</h2>
                    <div className={styles.bedroomType}>
                        <div className={styles.bedroomType__bedroomImg}></div>
                        <div className={styles.bedroomType__container}>
                            <p className={styles.bedroomType__text}>Спальня – одно из самых важных помещений в доме.
                                Как известно, чтобы человек мог полноценно восстанавливаться во время сна, спальня должна
                                быть комфортной и максимально подходить под потребности того , кто в ней отдыхает.
                                Спальни на заказ будет отличным решением для Вас. Наши дизайнеры помогут Вам обустроить
                                спальню именно так как Вы желаете.</p>
                            <button className={styles.bedroomType__button}
                                    onClick={() => this.openOrder('Спальни')}>
                                <div className={styles.bedroomType__buttonImg}></div>
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                </div>
                <ModalOrder orderIsOpen={this.props.orderIsOpen} closeOrder={this.props.closeOrder}
                            openNotification={this.props.openNotification} source={this.props.source}
                            closeNotification={this.props.closeNotification}
                            notificationIsOpen={this.props.notificationIsOpen} text={this.props.text}/>
            </section>
        )}
}

export default Bedroom
