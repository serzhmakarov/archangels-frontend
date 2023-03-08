import { useState } from 'react';
import PlaceholderImage from '../assets/images/placeholder.jpeg';

export default function useImageLoad() {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  return {  
    loaded,
    handleImageLoaded,
    PlaceholderImage,
  }
};