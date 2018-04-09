import React, { Component } from 'react'

class HowWorks extends Component {
    render() {
        return <section className="HowWorks">
            <h1 className='title'>Как мы работаем</h1>
            <div className="howWorksItem">
                <div className="howWorksItem__img"></div>
                <p className='text'>Консультации</p>
            </div>

            <div className="howWorksItem">
                <div className="howWorksItem__img"></div>
                <p className='text'>Замер</p>
            </div>

            <div className="howWorksItem">
                <div className="howWorksItem__img"></div>
                <p className='text'>Дизайн-проект</p>
            </div>

            <div className="howWorksItem">
                <div className="howWorksItem__img"></div>
                <p className='text'>Расчет</p>
            </div>

            <div className="howWorksItem">
                <div className="howWorksItem__img"></div>
                <p className='text'>Изготовление</p>
            </div>

            <div className="howWorksItem">
                <div className="howWorksItem__img"></div>
                <p className='text'>Установка</p>
            </div>
        </section>
    }
}

export default HowWorks
