import React from 'react'
import Img1 from "../images/examples/1.webp"
import Img2 from "../images/examples/2.webp"
import Img3 from "../images/examples/3.webp"
import Img4 from "../images/examples/4.webp"
import Img5 from "../images/examples/5.webp"
import Img6 from "../images/examples/6.webp"
import Img7 from "../images/examples/7.webp"
import Img8 from "../images/examples/8.webp"

function ImgBlock() {
  return (
    <>
            <div className="img_block">
              <img src={Img1} alt="" />
              <img src={Img2} alt="" />
              <img src={Img3} alt="" />
              <img src={Img4} alt="" />
              <img src={Img5} alt="" />
              <img src={Img6} alt="" />
              <img src={Img7} alt="" />
              <img src={Img8} alt="" />
            </div>
    </>
  )
}

export default ImgBlock