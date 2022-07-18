import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import gladVideo from '../images/glad_video.webp'

function Glad() {
  return (
    <>
        <div className="custom__container">
            <div className="gladTitle"><span className='gladTitle_b'>Довольные клиенты</span> — лучшая оценка нашей работы!</div>
            <div className="gladSubtitle">По статистике 82% клиентов рекомендуют нас знакомым, 
            а 25% возвращаются к нам за услугами повторно!</div>
            <div className="gladVideos">
            <svg className='left__arrow' width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_bi_88_1393)">
            <circle r="25" transform="matrix(-1 0 0 1 35 35)" fill="#EBAF7B"/>
            <circle r="30" transform="matrix(-1 0 0 1 35 35)" stroke="#F7F7F7" stroke-width="10"/>
            </g>
            <path d="M50 36C50.5523 36 51 35.5523 51 35C51 34.4477 50.5523 34 50 34L50 36ZM19.2929 34.2929C18.9024 34.6834 18.9024 35.3166 19.2929 35.7071L25.6569 42.0711C26.0474 42.4616 26.6805 42.4616 27.0711 42.0711C27.4616 41.6805 27.4616 41.0474 27.0711 40.6569L21.4142 35L27.0711 29.3431C27.4616 28.9526 27.4616 28.3195 27.0711 27.9289C26.6805 27.5384 26.0474 27.5384 25.6569 27.9289L19.2929 34.2929ZM50 34L20 34L20 36L50 36L50 34Z" fill="#EBEBEB"/>
            <defs>
            <filter id="filter0_bi_88_1393" x="-90" y="-90" width="250" height="250" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImage" stdDeviation="45"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_88_1393"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_88_1393" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_88_1393"/>
            </filter>
            </defs>
            </svg>
            <svg className='right__arrow' width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_bi_88_1390)">
            <circle cx="35" cy="35" r="25" fill="#CC6B0B"/>
            <circle cx="35" cy="35" r="25" fill="white" fill-opacity="0.1"/>
            <circle cx="35" cy="35" r="30" stroke="#F7F7F7" stroke-width="10"/>
            </g>
            <path d="M20 36C19.4477 36 19 35.5523 19 35C19 34.4477 19.4477 34 20 34L20 36ZM50.7071 34.2929C51.0976 34.6834 51.0976 35.3166 50.7071 35.7071L44.3431 42.0711C43.9526 42.4616 43.3195 42.4616 42.9289 42.0711C42.5384 41.6805 42.5384 41.0474 42.9289 40.6569L48.5858 35L42.9289 29.3431C42.5384 28.9526 42.5384 28.3195 42.9289 27.9289C43.3195 27.5384 43.9526 27.5384 44.3431 27.9289L50.7071 34.2929ZM20 34L50 34L50 36L20 36L20 34Z" fill="white"/>
            <defs>
            <filter id="filter0_bi_88_1390" x="-90" y="-90" width="250" height="250" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImage" stdDeviation="45"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_88_1390"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_88_1390" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_88_1390"/>
            </filter>
            </defs>
            </svg>
            <svg className='playButton' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_bi_88_1401)">
            <path d="M50 0C22.3837 0 0 22.3837 0 50C0 77.616 22.3837 100 50 100C77.616 100 100 77.616 100 50C100 22.3837 77.616 0 50 0ZM73.9251 54.0143L44.1006 74.532C43.2709 75.1003 42.3051 75.3909 41.3369 75.3909C40.5574 75.3909 39.7837 75.2057 39.0711 74.8334C37.4697 73.9863 36.464 72.3257 36.464 70.5183V29.4823C36.464 27.6749 37.4697 26.014 39.0711 25.1669C40.6726 24.3269 42.6074 24.4426 44.1006 25.4683L73.9251 45.9857C75.2449 46.8943 76.0357 48.3974 76.0357 50C76.0357 51.6026 75.2451 53.1057 73.9251 54.0143Z" fill="#CC6B0B"/>
            <path d="M50 0C22.3837 0 0 22.3837 0 50C0 77.616 22.3837 100 50 100C77.616 100 100 77.616 100 50C100 22.3837 77.616 0 50 0ZM73.9251 54.0143L44.1006 74.532C43.2709 75.1003 42.3051 75.3909 41.3369 75.3909C40.5574 75.3909 39.7837 75.2057 39.0711 74.8334C37.4697 73.9863 36.464 72.3257 36.464 70.5183V29.4823C36.464 27.6749 37.4697 26.014 39.0711 25.1669C40.6726 24.3269 42.6074 24.4426 44.1006 25.4683L73.9251 45.9857C75.2449 46.8943 76.0357 48.3974 76.0357 50C76.0357 51.6026 75.2451 53.1057 73.9251 54.0143Z" fill="white" fill-opacity="0.1"/>
            </g>
            <defs>
            <filter id="filter0_bi_88_1401" x="-90" y="-90" width="280" height="280" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImage" stdDeviation="45"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_88_1401"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_88_1401" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_88_1401"/>
            </filter>
            </defs>
            </svg>

                <img src={gladVideo} alt="video" />
            </div>
            <div className="gladComments">
                <div className="gladComments_item">
                    <div className="gladComments_item-title">Иван</div>
                    <div className="gladComments_item-subtitle">Дом из бруса в "Тёплый угол"</div>
                    <hr />
                    <div className="gladComments_item-text">На то, чтобы решиться на строительство собственного дома, 
                    нам потребовалось почти 5 лет. Сначала не получалось из-за работы, потом не было времени. 
                    Однажды мы решили, что если будем ждать, то и без нового дома можно остаться. Компанию 
                    «Северный топор» нашли через интернет. Муж сказал, что условия и цены у компании хорошие, 
                    так что надо звонить. Муж позвонил в тот же</div>
                    <div className="gladComments_item-readMore">Читать полностью</div>
                </div>
                <div className="gladComments_item">
                    <div className="gladComments_item-title">Иван</div>
                    <div className="gladComments_item-subtitle">Дом из бруса в "Тёплый угол"</div>
                    <hr />
                    <div className="gladComments_item-text">На то, чтобы решиться на строительство собственного дома, 
                    нам потребовалось почти 5 лет. Сначала не получалось из-за работы, потом не было времени. 
                    Однажды мы решили, что если будем ждать, то и без нового дома можно остаться. Компанию 
                    «Северный топор» нашли через интернет. Муж сказал, что условия и цены у компании хорошие, 
                    так что надо звонить. Муж позвонил в тот же</div>
                    <div className="gladComments_item-readMore">Читать полностью</div>
                </div>
                <div className="gladComments_item">
                    <div className="gladComments_item-title">Иван</div>
                    <div className="gladComments_item-subtitle">Дом из бруса в "Тёплый угол"</div>
                    <hr />
                    <div className="gladComments_item-text">На то, чтобы решиться на строительство собственного дома, 
                    нам потребовалось почти 5 лет. Сначала не получалось из-за работы, потом не было времени. 
                    Однажды мы решили, что если будем ждать, то и без нового дома можно остаться. Компанию 
                    «Северный топор» нашли через интернет. Муж сказал, что условия и цены у компании хорошие, 
                    так что надо звонить. Муж позвонил в тот же</div>
                    <div className="gladComments_item-readMore">Читать полностью</div>
                </div>
                <div className="gladComments_item">
                    <div className="gladComments_item-title">Иван</div>
                    <div className="gladComments_item-subtitle">Дом из бруса в "Тёплый угол"</div>
                    <hr />
                    <div className="gladComments_item-text">На то, чтобы решиться на строительство собственного дома, 
                    нам потребовалось почти 5 лет. Сначала не получалось из-за работы, потом не было времени. 
                    Однажды мы решили, что если будем ждать, то и без нового дома можно остаться. Компанию 
                    «Северный топор» нашли через интернет. Муж сказал, что условия и цены у компании хорошие, 
                    так что надо звонить. Муж позвонил в тот же</div>
                    <div className="gladComments_item-readMore">Читать полностью</div>
                </div>
            </div>
            <LinkContainer to="comments"><div className="gladButton main__button">Все отзывы</div></LinkContainer>
        </div>
    </>
  )
}

export default Glad