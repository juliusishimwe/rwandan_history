import { useEffect, useState } from 'react';
import img1 from '../../assets/e3a913e5b5610a0d1a1b09411a32577f51246bb0.png';
import img2 from '../../assets/96b99080744f5db9bdfb956ebbb65b31cef2a9f3.png';
import img3 from '../../assets/6cbd24ade1f466fa9958d1dbca41574c0c1dabca.png';
import img4 from '../../assets/37cb56ff462750cb9867168b71496550ec805126.png';
import img5 from '../../assets/a732bcec112a779e0b47a92f22cb4536e4ea77d5.png';

const heroImages = [img1, img2, img3, img4, img5];

export function HeroBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {heroImages.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: currentImageIndex === index ? 1 : 0,
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      ))}
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
    </>
  );
}
