import React, { Component } from 'react'

class Contacts extends Component {
    render() {
        return <section className='contacts'>
            <h1 className='title'>Контакты</h1>
            <input className='contacts__input' type="text" placeholder='Ваше имя'/>
            <input className='contacts__input' type="text" placeholder='+7-(xxx)-xxx-xx-xx '/>
            <input className='contacts__input' type="text" placeholder='E-mail'/>
            <textarea className='contacts__textarea'  cols="30" rows="10" placeholder='Комменарий'></textarea>
            <button className='contacts__button'>Отправить</button>
        </section>
    }
}

export default Contacts
