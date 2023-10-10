import React from 'react'
import Slider from "react-slick";

const Sectionthird = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 2 ,
    slidesToScroll: 1,
    initialSlide: 0,
              }

  return (
    <div className="sectionthird">
      <div className="container">
        <div className="row">
          <div style={{ backgroundColor: "red" }} className="col-sm-12 col-sm-6 col-md-8">
            <div className="carousel">
              <div className="image">
              

              </div>
              <div className="category"></div>
            </div>
          </div>
          <div style={{ backgroundColor: "green" }} className="col-sm-12 col-sm-6 col-md-4">
            neecs
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sectionthird