import { useState } from 'react';
import './Banner.css'
import { useEffect } from 'react';


const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      className: 'bannerOne',
      content: <div className=''>
            <h1 className='text-large text-white'>Welcome to Slide 1</h1>
            <p className='text-white text-wrap'>Cooking is more than just a daily chore; it’s an opportunity to explore creativity and nurture the soul. Each dish tells a story, reflecting the unique blend of ingredients, techniques, and personal touches that a cook brings to the table.</p>
            <div className=''>
                <button className='bg-primary hover:bg-hover text-black text-mid px-5 py-2 font-bold rounded-full'>Explore Now</button>
                <button className='ml-4 hover:bg-hover text-white border-2 text-mid px-5 py-2 font-bold rounded-full'>Our Feedback</button>
            </div>
      </div> , 
    },
    {
      className: 'bannerTwo',
      content: <h1 className='text-white'>Discover More on Slide 2</h1>, // Unique content for slide 2
    },
    {
      className: 'bannerThree',
      content: <h1 className='text-white'>Enjoy Slide 3</h1>, // Unique content for slide 3
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

    // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='mt-4 rounded-lg relative'>
      {/* Render the current slide's background and content */}
      <div className={slides[currentSlide].className}>
        {slides[currentSlide].content}
      </div>

      {/* Previous Slide Button */}
      <button 
        className='prev-slide' 
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Next Slide Button */}
      <button 
        className='next-slide' 
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Banner;