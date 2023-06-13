import React, { useState, useEffect } from 'react';
import PlaceholderImage from '../assets/images/placeholder.jpeg';

function LazyBackground({ src, placeholder = PlaceholderImage, ...props }) {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return (
    <div 
      {...props} 
      style={{ backgroundImage: `url(${imageSrc || placeholder})` }} 
    />
  );
}

export default LazyBackground;
