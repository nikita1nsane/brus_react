import React from 'react'
import AboutImg from '../images/about_right_img.webp'
import Modal from './Modal'

function AboutBlock() {
  return (
    <>
        <div className="custom__container">
            <div className="about__block">
                <div className="about__left_content">
                    <div className="about__left_content__title">О компании</div>
                    <div className="about__left_content__subtitle">
                    Здесь говорится о компании, географии строительства, преимущества работы с компанией
                    </div>
                    <div className="about__left_content__text">
                    Ключевые особенности структуры проекта неоднозначны и будут описаны максимально подробно. 
                    Учитывая ключевые сценарии поведения, перспективное планирование позволяет выполнить важные 
                    задания по разработке глубокомысленных рассуждений. Имеется спорная точка зрения, гласящая 
                    примерно следующее: непосредственные участники технического прогресса смешаны с не уникальными 
                    данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.
                    </div>
                    <div className="about__left_content__button">
                    <Modal text="Кнопка"/>
                    </div>
                </div>
                <div className="about__right_content">
                    <div className="about__right_content__block">
                        <div className="about__right_content__block_img"><img src={AboutImg} alt="AboutImg" /></div>
                        <div className="about__right_content__block_text">
                            <div className="about__right_content__block_title">Преимущество 1</div>
                            <div className="about__right_content__block_description">Описание в 2-3 строки описание в 2-3 
                            строки описание в 2-3 строки описание в 2-3 строки </div>
                        </div>
                    </div>
                        <div className="about__right_content__block">
                        <div className="about__right_content__block_img"><img src={AboutImg} alt="AboutImg" /></div>
                        <div className="about__right_content__block_text">
                            <div className="about__right_content__block_title">Преимущество 2</div>
                            <div className="about__right_content__block_description">Описание в 2-3 строки описание в 2-3 
                            строки описание в 2-3 строки описание в 2-3 строки </div>
                        </div>
                    </div>
                    <div className="about__right_content__block">
                        <div className="about__right_content__block_img"><img src={AboutImg} alt="AboutImg" /></div>
                        <div className="about__right_content__block_text">
                            <div className="about__right_content__block_title">Преимущество 3</div>
                            <div className="about__right_content__block_description">Описание в 2-3 строки описание в 2-3 
                            строки описание в 2-3 строки описание в 2-3 строки </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutBlock