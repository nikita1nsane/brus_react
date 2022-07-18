import React from 'react'

function CustomLi(props) {
  return (
    <>
        <li>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
            </svg>
            {props.text}
        </li>
    </>
  )
}

export default CustomLi