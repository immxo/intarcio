import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return <footer className='footer'>
            <div>
                <div className='phone'>
                    <h2 className='phone__title'>+7 (911) 743 44 23</h2>
                    <p className='phone__text'>Ежедневно с 10:00-22:00</p>
                </div>

                <nav className='nav'>
                    <ul>
                        <li><a href="">Главная</a></li>
                        <li><a href="">О компании</a></li>
                        <li><a href="">Как мы работаем</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>
                </nav>
            </div>
            <div className='vk'>
                <div className='vk__img'></div>
                <a href='https://vk.com/intarcio' target='_blank' className='vk__text'>Мы вконтакте</a>
            </div>
        </footer>
    }
}

export default Footer
