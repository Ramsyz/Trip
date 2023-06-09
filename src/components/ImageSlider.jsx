import { useState } from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

function ImageSlider() {
    const slides = [
        {
            url: 'https://images.pexels.com/photos/2410602/pexels-photo-2410602.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Lobster',
        },
        {
            url:'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Chicken',        
        },
        {
            url:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'PanCake',
        },
        {
            url: 'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Steak',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length-1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className="max-w-[1400px] m-auto h-[500px] w-full py-16 px-4 relative group">
      <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500" style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>

    {/* left Arrow */}
    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 rounded-full group-hover:bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
    </div>
    {/* Right Arrow */}
    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 rounded-full group-hover:bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactRight onClick={nextSlide} size={30}/>
    </div>

    <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
            <div className='text-2xl cursor-pointer' key={slideIndex} onClick={()=>goToSlide(slideIndex)}>
             <RxDotFilled/>
            </div>
        ))}
    </div>


    </div>
    
  )
}

export default ImageSlider
