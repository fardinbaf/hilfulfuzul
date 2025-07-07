import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideshowProps {
  images: Array<{
    id: number;
    url: string;
    caption: string;
  }>;
  autoplaySpeed?: number;
}

const Slideshow = ({ images, autoplaySpeed = 5000 }: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = () => {
    if (images.length === 0) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isHovering || images.length < 2) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, autoplaySpeed);
    
    return () => clearInterval(interval);
  }, [nextSlide, autoplaySpeed, isHovering, images.length]);

  if (images.length === 0) {
    return (
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">No slides available.</p>
        </div>
    );
  }

  return (
    <div 
      className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={image.url}
            alt={image.caption}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold">{image.caption}</h2>
          </div>
        </div>
      ))}
      
      {images.length > 1 && (
        <>
            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-white transition-all duration-300"
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            
            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-white transition-all duration-300"
                onClick={nextSlide}
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                        ? 'bg-white scale-110' 
                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
                ))}
            </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;
