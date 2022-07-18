import React from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function RangeSlider() {
  return (
    <>
        <Slider range allowCross={false} defaultValue={[0, 20]} />
    </>
)
}

export default RangeSlider