import React from 'react'
import GSImg from '../images/get_started.webp'
import ModalForm from './ModalForm'

function GetStartedBlock() {
  return (
    <>
        <div className="custom__container">
            <div className="getStarted">
                <div className="getStarted__leftContent">
                    <div className="getStarted__leftContent__title">Приступим сегодня</div>
                    <div className="getStarted__leftContent__text">Начнем со сметы, укажите необходимый набор услуг</div>
                </div>
                <div className="getStarted__midContent">
                    <img src={GSImg} alt="" />
                </div>
                <div className="getStarted__rightContent">
                    <ModalForm/>
                </div>
            </div>
        </div>
    </>
  )
}

export default GetStartedBlock