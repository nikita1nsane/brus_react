import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import FirstBlockOptions from './FirstBlockOptions'

function FirstBlock() {
  return (
    <>
    <div className='first__block custom__container'>
        <div className='first_block_bg_blue'></div>
        <div className='first_block_bg_house'></div>
        <div className="first__left__content">
            <div className="header__text">
            Строительство домов и бань <br />
            из бруса «под усадку» <br />
            с последующей отделкой
            </div>
            <div className='header__description'>
                <p>Строим дома из бруса естественной влажности или камерной сушки!</p>
            </div>
            <LinkContainer to="buildings"><div className="main__button">Подробнее</div></LinkContainer>
        </div>
    </div>
    <FirstBlockOptions/>
    </>
  )
}

export default FirstBlock