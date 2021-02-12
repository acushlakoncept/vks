/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import coconutSlide from '../images/coconut_slide.jpg';
import flourmillSlide from '../images/flourmill_slide.jpg';
import towerSlide from '../images/banner_tower.jpg';

export default function HomeSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="home-slider">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={towerSlide}
          alt="tower building"
        />
        {/* <Carousel.Caption>
          <h1>Learn . Innovate . Impact</h1>
          <br />
          <p>More than a  library</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={flourmillSlide}
          alt="flourmill factory"
        />

        {/* <Carousel.Caption>
          <h1>West Africa's first digital library</h1>
          <br />
          <p>
            Designed to deliver topnotch information and educational
            services both onsite and virtually.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={coconutSlide}
          alt="coconut factory"
        />

        {/* <Carousel.Caption>
          <h1>Technology and Education Cradle</h1>
          <br />
          <p>
            A springboard to African solutions created by African for African challenges
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}
