import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselMovieOne } from './carouselmovies/CarouselMovieOne';
import { CarouselMovieTwo } from './carouselmovies/CarouselMovieTwo';
import { CarouselMovieThree } from './carouselmovies/CarouselMovieThree';

export function MovieCarousel() {

    
    return(
            <Carousel className='MovieCarousel'>
                <Carousel.Item interval={3000}>
                    <CarouselMovieOne />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <CarouselMovieTwo />    
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <CarouselMovieThree />
                </Carousel.Item>
            </Carousel>
    )
}