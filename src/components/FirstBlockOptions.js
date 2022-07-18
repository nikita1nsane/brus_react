import React from 'react'
import FBOptions from '../images/FBOptions.webp'

function FirstBlockOptions() {
  return (
    <>
        <div className='custom__container first__block__options'>
            <div className='option'>
                    <img src={FBOptions} alt="Options" />
                <p className='title'>
                    Профессиональные<br /> бригады и проектировщики
                </p>
            </div>

            <div className='option'>
                    <img src={FBOptions} alt="Options" />
                <p className='title'>
                    Качественные<br /> строительные материалы
                </p>
            </div>

            <div className='option'>
                    <img src={FBOptions} alt="Options" />
                <p className='title'>
                    Полный пакет<br /> технической документации
                </p>
            </div>
        </div>
    </>
  )
}

export default FirstBlockOptions