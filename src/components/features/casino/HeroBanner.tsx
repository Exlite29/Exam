import React, { useState, useEffect } from 'react';

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setTouchEnd(null); // Reset
    if ('touches' in e) {
      setTouchStart(e.targetTouches[0].clientX);
    } else {
      setTouchStart((e as React.MouseEvent).clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if ('touches' in e) {
      setTouchEnd(e.targetTouches[0].clientX);
    } else {
      setTouchEnd((e as React.MouseEvent).clientX);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const banners = [
    { id: 1, image: 'https://f1m9.blob.core.windows.net/f1m9/banner/Bono_Gana%20hasta%20500_2400x500.webp', alt: 'Bono Gana hasta 500', link: '#' },
    { id: 2, image: 'https://f1m9.blob.core.windows.net/f1m9/banner/Bono_Vip_2400x500.webp', alt: 'Bono Vip', link: '#' },
    { id: 3, image: 'https://f1m9.blob.core.windows.net/f1m9/banner/Bono_180_2400x500.webp', alt: 'Bono 180', link: '#' },
    { id: 4, image: 'https://f1m9.blob.core.windows.net/f1m9/banner/Bono_Referidos_2400x500.webp', alt: 'Bono Referidos', link: '#' },
    { id: 5, image: 'https://f1m9.blob.core.windows.net/f1m9/banner/Bono_25_2400x500.webp', alt: 'Bono 25', link: '#' },
    { id: 6, image: 'https://f1m9.blob.core.windows.net/f1m9/banner/Bono_10_2400x500.webp', alt: 'Bono 10', link: '#' },
    { id: 7, image: 'https://f1m9.blob.core.windows.net/f1m9/banner/Bono_Rescate_2400x500.webp', alt: 'Bono Rescate', link: '#' },
    { id: 8, image: 'https://f1m9.blob.core.windows.net/f1m9/banner/Bono_cumplea%C3%B1os_2400x500.webp', alt: 'Bono Cumpleaños', link: '#' },
    { id: 9, image: 'https://f1m9.blob.core.windows.net/f1m9/banner/Bono_RescateD_2400x500.webp', alt: 'Bono Rescate D', link: '#' },
    { id: 10, image: 'https://f1m9.blob.core.windows.net/f1m9/banner/Bono_Rese%C3%B1a_2400x500.webp', alt: 'Bono Reseña', link: '#' },
    { id: 11, image: 'https://f1m9.blob.core.windows.net/f1m9/banner/Viernes_2400x500.webp', alt: 'Viernes', link: '#' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="hero-banner">
      <div className="container hero-container">
        <div
          className="carousel"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onTouchStart}
          onMouseMove={onTouchMove}
          onMouseUp={onTouchEnd}
          onMouseLeave={onTouchEnd}
        >
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {banners.map((banner) => (
              <a
                key={banner.id}
                href={banner.link}
                className="carousel-slide"
                onDragStart={(e) => e.preventDefault()} // Prevent default image drag
              >
                <img src={banner.image} alt={banner.alt} className="banner-img" />
              </a>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .hero-banner {
          background-color: var(--bg-main);
          padding-top: 15px;
          padding-bottom: 20px;
        }

        .hero-container {
          padding: 0 var(--space-md);
        }

        @media (min-width: 1200px) {
          .hero-container {
            padding-left: 90px;
            padding-right: 90px;
          }
        }

        .carousel {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: var(--radius-xl);
          aspect-ratio: 2 / 1;
          cursor: grab;
        }

        .carousel:active {
          cursor: grabbing;
        }

        @media (min-width: 1200px) {
          .carousel {
            border-radius: var(--radius-2xl);
            aspect-ratio: 5 / 1;
          }
        }

        .carousel-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
          height: 100%;
          pointer-events: none; /* Let clicks pass through for dragging, but links handle clicks specifically */
        }
        
        .carousel-slide {
           flex: 0 0 100%;
           height: 100%;
           display: block;
           pointer-events: auto; /* Re-enable pointer events for links */
        }

        .banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          user-select: none; /* Prevent selection during drag */
        }

        @media (max-width: 768px) {
          .hero-banner {
            padding-top: 5px;
            padding-bottom: 10px;
          }
          .carousel {
             border-radius: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroBanner;
