import { useState } from 'react';
import './Banner.css'
import { useEffect } from 'react';


const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      className: 'bannerOne',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="md:text-4xl font-bold text-white mb-4 drop-shadow-lg">Cooking creativity at its finest! Unlocking delicious possibilities.</h1>
          <p className="text-white mb-6 px-4 max-w-lg bg-black bg-opacity-50 rounded-md p-3">
            Cooking is more than just a daily chore; it’s an opportunity to explore creativity and nurture the soul. Each dish tells a story, reflecting the unique blend of ingredients, techniques, and personal touches that a cook brings to the table.
          </p>
          <div className="flex space-x-4 btns">
            <button className="bg-primary hover:bg-hover text-black text-lg px-5 py-2 font-bold rounded-full">
              Explore Now
            </button>
            <button className="hover:bg-hover text-white border-2 text-lg px-5 py-2 font-bold rounded-full">
              Our Feedback
            </button>
          </div>
    </div>
      ) 
    },
    {
      className: 'bannerTwo',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="md:text-4xl font-bold text-white mb-4 drop-shadow-lg">Spice up your kitchen adventures. Crafting happiness, <br /> one recipe at a time.</h1>
          <p className="text-white mb-6 px-4 max-w-lg bg-black bg-opacity-50 rounded-md p-3">
            Cooking is more than just a daily chore; it’s an opportunity to explore creativity and nurture the soul. Each dish tells a story, reflecting the unique blend of ingredients, techniques
          </p>
          <div className="flex space-x-4 btns">
            <button className="bg-primary hover:bg-hover text-black text-lg px-5 py-2 font-bold rounded-full">
              Explore Now
            </button>
            <button className="hover:bg-hover text-white border-2 text-lg px-5 py-2 font-bold rounded-full">
              Our Feedback
            </button>
          </div>
    </div>
      )
    },
    {
      className: 'bannerThree',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="md:text-4xl font-bold text-white mb-4 drop-shadow-lg">Bringing families together through food. Elevate your <br /> cooking game effortlessly.</h1>
          <p className="text-white mb-6 px-4 max-w-lg bg-black bg-opacity-50 rounded-md p-3">
            Cooking is more than just a daily chore; it’s an opportunity to explore creativity and nurture the soul. Each dish tells a story.
          </p>
          <div className="flex space-x-4 btns">
            <button className="bg-primary hover:bg-hover text-black text-lg px-5 py-2 font-bold rounded-full">
              Explore Now
            </button>
            <button className="hover:bg-hover text-white border-2 text-lg px-5 py-2 font-bold rounded-full">
              Our Feedback
            </button>
          </div>
    </div>
      )
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

    // Automatically change slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); 
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