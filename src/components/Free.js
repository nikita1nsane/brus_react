import React from 'react'
import freeImg from '../images/free.webp'
import ModalForm from './ModalForm'

function Free() {
  return (
    <>
        <div className="custom__container">
            <div className="free">
                <div className="free__leftContent">
                    <div className="free__leftContent__title">Закажите <span>бесплатный</span> выезд замерщика на объект</div>
                    <div className="free__leftContent__text">
                        <ul>
                            <li>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
                            </svg>
                            <span>Специалист проведет все замеры, оценит объем и сложность работы </span>
                            </li>
                            <li>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
                            </svg>
                            <span>После оценки объемов и сложности, замерщик просчитает стоимость работ                               </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="free__midContent">
                    <img src={freeImg} alt="" />
                </div>
                <div className="getStarted__rightContent free__rightContent">
                    <ModalForm/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Free