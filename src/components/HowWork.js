import React from 'react'
import SchemaItem from './SchemaItem'

function HowWork() {
  return (
    <>
        <div className="custom__container">
            <div className="howWork__topContent">
                <div className="topContent_left">
                    <div className="topContent_left-title">По какой схеме мы работаем с каждым клиентом</div>
                    <div className="topContent_left-subtitle">График оплаты работ согласовывается и подстраивается под каждого клиента</div>
                </div>
                <div className="topContent_right">
                    <div className="topContent_right-svg">
                        <div className="topContent_right-svgLeft">

                        </div>
                        <div className="topContent_right-svgRight">

                        </div>
                        <svg className='svg' width="195" height="60" viewBox="0 0 195 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_bi_88_1275)">
<rect x="10" y="10" width="80" height="40" rx="20" fill="#EBAF7B"/>
<rect x="10" y="10" width="80" height="40" rx="20" fill="white" fill-opacity="0.1"/>
<rect x="5" y="5" width="90" height="50" rx="25" stroke="#F7F7F7" stroke-width="10"/>
</g>
<g filter="url(#filter1_bi_88_1275)">
<rect width="80" height="40" rx="20" transform="matrix(-1 0 0 1 185 10)" fill="#CC6B0B"/>
<rect width="80" height="40" rx="20" transform="matrix(-1 0 0 1 185 10)" fill="white" fill-opacity="0.1"/>
<rect x="5" y="-5" width="90" height="50" rx="25" transform="matrix(-1 0 0 1 195 10)" stroke="#F7F7F7" stroke-width="10"/>
</g>
<path d="M70 31C70.5523 31 71 30.5523 71 30C71 29.4477 70.5523 29 70 29L70 31ZM29.2929 29.2929C28.9024 29.6834 28.9024 30.3166 29.2929 30.7071L35.6569 37.0711C36.0474 37.4616 36.6805 37.4616 37.0711 37.0711C37.4616 36.6805 37.4616 36.0474 37.0711 35.6569L31.4142 30L37.0711 24.3431C37.4616 23.9526 37.4616 23.3195 37.0711 22.9289C36.6805 22.5384 36.0474 22.5384 35.6569 22.9289L29.2929 29.2929ZM70 29L30 29L30 31L70 31L70 29Z" fill="#EBEBEB"/>
<path d="M125 31C124.448 31 124 30.5523 124 30C124 29.4477 124.448 29 125 29L125 31ZM165.707 29.2929C166.098 29.6834 166.098 30.3166 165.707 30.7071L159.343 37.0711C158.953 37.4616 158.319 37.4616 157.929 37.0711C157.538 36.6805 157.538 36.0474 157.929 35.6569L163.586 30L157.929 24.3431C157.538 23.9526 157.538 23.3195 157.929 22.9289C158.319 22.5384 158.953 22.5384 159.343 22.9289L165.707 29.2929ZM125 29L165 29L165 31L125 31L125 29Z" fill="#FDFDFD"/>
<defs>
<filter id="filter0_bi_88_1275" x="-90" y="-90" width="280" height="240" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImage" stdDeviation="45"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_88_1275"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_88_1275" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_88_1275"/>
</filter>
<filter id="filter1_bi_88_1275" x="5" y="-90" width="280" height="240" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImage" stdDeviation="45"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_88_1275"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_88_1275" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_88_1275"/>
</filter>
</defs>
                        </svg>

                    </div>
                    <div className="topContent_right-lists">01/<span>12</span></div>

                </div>
            </div>
            <div className="howWork__bottomContent">
                <SchemaItem id="1"/>
                <SchemaItem id="2"/>
                <SchemaItem id="3"/>
                <SchemaItem id="4"/>
            </div>
        </div>
    </>
  )
}

export default HowWork