import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Modal from './Modal'

function Slider(props) {
  return (
    <>
        <div className="Slider">
        <div className="view__block__left__content">
                    <img src={props.img} alt="LeftContent" />
                </div>
                <div className="view__block__right__content">
                    <div className="view__block__right__content__title h8">
                        Дома из бруса в "Тёплый угол"
                    </div>
                    <div className="view__block__right__content__text h10">
                    Некоторые особенности внутренней политики призывают нас к новым свершениям, 
                    которые, в свою очередь, должны быть представлены в исключительно положительном 
                    свете. Приятно, граждане, наблюдать, как стремящиеся вытеснить традиционное 
                    производство, нанотехнологии превращены в посмешище, хотя само их существование 
                    приносит несомненную пользу обществу.
                    </div>
                    <div className="view__block__right__content__specials">
                        <div className="view__block__right__content__specials__title h9">Особенности дома</div>
                        <ul className='h10'>
                            <li>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
                            </svg>

                            Особенность 1
                            </li>
                            <li>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
                            </svg>

                            Особенность 2
                            </li>
                            <li>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
                            </svg>

                            Особенность 3
                            </li>
                        </ul>
                    </div>
                    <div className="view__block__right__content__info h9">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.47723 0 0 4.47723 0 10C0 15.5228 4.47723 20 10 20C15.5228 20 20 15.5228 20 10C19.9939 4.47968 15.5203 0.00610352 10 0ZM10 18.9999C5.02945 18.9999 1.00006 14.9706 1.00006 10C1.00006 5.02945 5.02945 1.00006 10 1.00006C14.9706 1.00006 18.9999 5.02945 18.9999 10C18.9943 14.9681 14.9681 18.9943 10 18.9999Z" fill="#CC6B0B"/>
                        <path d="M11.4999 14.5H10.5V8.00003C10.5 7.72385 10.2762 7.5 9.99997 7.5H8.99991C8.72388 7.5 8.50003 7.72385 8.50003 8.00003C8.50003 8.27621 8.72388 8.49991 8.99991 8.49991H9.49994V14.5H8.49988C8.22385 14.5 8 14.7238 8 14.9998C8 15.276 8.22385 15.4999 8.49988 15.4999H11.4999C11.7761 15.4999 11.9999 15.276 11.9999 14.9998C11.9999 14.7238 11.7761 14.5 11.4999 14.5Z" fill="#CC6B0B"/>
                        <path d="M11.0001 5C11.0001 5.55222 10.5523 5.99991 10.0001 5.99991C9.44785 5.99991 9 5.55222 9 5C9 4.44763 9.44785 3.99994 10.0001 3.99994C10.5523 3.99994 11.0001 4.44763 11.0001 5Z" fill="#CC6B0B"/>
                    </svg>

                        <span>Минимальные размеры участка для строительства: 22,4 м * 15,5 м</span>
                    </div>
                    <div className="view__block__right__content__price">
                        от 3 000 000 руб.
                    </div>
                    <div className="view__block__right__content__buttons">
                        <Modal text='Хочу такой'/>
                        <LinkContainer to="built"><div className='main__button outline__button'>Посмотреть работы</div></LinkContainer>
                    </div>
                </div>
        </div>

    </>
  )
}

export default Slider