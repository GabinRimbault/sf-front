import React, { useState, useEffect, Children, useCallback } from 'react';

export default function Carousel({ children, slideInterval = 5000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = Children.map(children, (child) => child.props.src);
    const [activeSlide, setActiveSlide] = useState(currentIndex);

    const handleSlideChange = (index) => {
        setCurrentIndex(index);
        setActiveSlide(index);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNextSlide = useCallback(() => { // Utilisez useCallback pour mémoriser la fonction
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images]);

    useEffect(() => {
        const carouselInterval = setInterval(goToNextSlide, slideInterval);

        return () => {
            clearInterval(carouselInterval);
        };
    }, [images, slideInterval, goToNextSlide]);

    const currentImage = images[currentIndex];

    return (
        <div className="carousel">
            <img src={currentImage} alt={`Slide ${currentIndex + 1}`} />
            <div className="carousel-navigation">
                <button className={"carousel-button"} onClick={goToPreviousSlide}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className={"carousel-button"} onClick={goToNextSlide}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <div className="slide-indicators">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`slide-indicator ${index === activeSlide ? 'active' : ''}`}
                        onClick={() => handleSlideChange(index)}
                    ></div>
                ))}
            </div>
        </div>

    );
}
