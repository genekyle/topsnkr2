import React, { useState } from 'react'


function ImageSlider({product}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    
    return (
        <div>
            <img className="object-cover md:h-[650px] md:w-[1000px]" src={product.images[currentIndex].src}></img>
            <div>
                <div className="flex space-x-4">
                    {product.images.map((slide, slideIndex) => (
                        <div onClick={() => goToSlide(slideIndex)} key = {slideIndex}>
                            <img className="cursor-pointer hover:border-4 active:border-4 sm:h-[100px] sm:w-[100px] sm:border-solid sm:border-2 md:h-[150px] md:w-[150px]" src={slide.src}></img>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    )
}

export default ImageSlider