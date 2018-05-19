import React, { Component } from 'react'
import styles from '../styles/Kitchen.module.css'
import ModalOrder from './ModalOrder'

class Kitchen extends Component {

    openOrder(type) {
        this.props.openOrder(type);
    }

    render() {
        return(
            <section className={styles.kitchen}>
                <div className={styles.kitchen__container}>
                    <h2 className={styles.kitchen__title}>Кухни на заказ от мебельного производства Интарсия</h2>
                    <p className={styles.kitchen__text}>В салоне «Интарсио» Вы можете купить недорого кухню от
                        производителя в Санкт-Петербурге на заказ по индивидуальным размерам и дизайнерским пожеланиям,
                        от эконом до премиум класса. Срок изготовления минимальный: 2-4 недели, в зависимости от
                        сложности заказа. Замер и Дизайн-проект — в нашей компании осуществляются бесплатно!<br/>
                        Удобство на кухне в первую очередь зависит от её планировки. Всё должно находиться на своих
                        местах, бытовые приборы и рабочие поверхности не должны мешать друг другу и препятствовать
                        свободному подходу к ним. Главное – это удобство.
                    </p>
                    <div className={styles.kitchenType}>
                        <h3 className={styles.kitchenType__titleMobile}>Классические кухни</h3>
                        <div className={styles.kitchenType__classicImg}></div>
                        <div className={styles.kitchenType__container}>
                            <h3 className={styles.kitchenType__title}>Классические кухни</h3>
                            <p className={styles.kitchenType__text}>Классический стиль ассоциируется с вычурностью,
                                богатством и продуманностью деталей. Однако, он не ограничивается строгими рамками и
                                правилами. Определение «классический стиль в интерьере» охватывает сразу несколько эпох
                                и деталей, характерных для них.</p>
                            <button className={styles.kitchenType__button}
                                onClick={() => this.openOrder('Классические кухни')}>
                                <div className={styles.kitchenType__buttonImg}></div>
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                    <div className={styles.kitchenType}>
                        <h3 className={styles.kitchenType__titleMobile}>Современные кухни</h3>
                        <div className={styles.kitchenType__modernImg}></div>
                        <div className={styles.kitchenType__container}>
                            <h3 className={styles.kitchenType__title}>Современные кухни </h3>
                            <p className={styles.kitchenType__text}>Современным стилям присуще сочетание светлых и ярких
                                цветов, игра контрастов. В материалах часто используется стекло, пластик и металл.
                                Основное требование к мебели в современном стиле – функциональность и отсутствие
                                излишнего вычурного декора</p>
                            <button className={styles.kitchenType__button}
                                    onClick={() => this.openOrder('Современные кухни')}>
                                <div className={styles.kitchenType__buttonImg}></div>
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                    <div className={styles.kitchenType}>
                        <h3 className={styles.kitchenType__titleMobile}>Экономные кухни</h3>
                        <div className={styles.kitchenType__economImg}></div>
                        <div className={styles.kitchenType__container}>
                            <h3 className={styles.kitchenType__title}>Экономные кухни </h3>
                            <p className={styles.kitchenType__text}>Кухни модульные эконом-класса — идеальное решение, если
                                нужно быстро, качественно и недорого сделать помещение функциональным и красивым</p>
                            <button className={styles.kitchenType__button}
                                    onClick={() => this.openOrder('Экономные кухни')}>
                                <div className={styles.kitchenType__buttonImg}></div>
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

export default Kitchen
