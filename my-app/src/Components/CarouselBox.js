import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import light from '../assets/light.jpg';
import dark from '../assets/dark.jpg';


export default class CarouselBox extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={light}
              alt='light'
            />
            <Carousel.Caption>
              <h3>My life</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sem.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={dark}
              alt='light'
            />
            <Carousel.Caption>
              <h3>My life</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sem.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={light}
              alt='light'
            />
            <Carousel.Caption>
              <h3>My life</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sem.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
