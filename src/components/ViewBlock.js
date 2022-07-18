import React from 'react'
import { Carousel } from 'react-bootstrap'
import Slider from './Slider'
import img1 from '../images/Projects/db023/db023_01.webp'
import img2 from '../images/Projects/db058/db058_01.webp'
import img3 from '../images/Projects/db066/db066_01.webp'

function ViewBlock() {
  return (
    <>
        <div className='custom__container view__block'>
            <div className="view__block__title">
                <div className='h7'>Виды домов из бруса</div>
                <div className='h8'>Подзаголовок</div>
            </div>
            <div className="view__block__content">
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




            <Carousel 
                nextIcon={<svg className='right__arrow'/>}
                prevIcon={<svg className='left__arrow'/>}
                fade
            >
                <Carousel.Item>
                    <Slider img={img1}/>
                </Carousel.Item>
                <Carousel.Item>
                    <Slider img={img2}/>
                </Carousel.Item>
                <Carousel.Item>
                    <Slider img={img3}/>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    </>
  )
}

export default ViewBlock