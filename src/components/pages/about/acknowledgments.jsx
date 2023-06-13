import React from 'react';

import { achieves } from '../../../constants';
import useImageLoad from '../../../hooks/useImageLoad';

const Acknowledgments = ({ t }) => {
  const { loaded, handleImageLoaded, PlaceholderImage } = useImageLoad();

  return (
    <div className="acknowledgments-page">
      <h1 className="title-block-text">{t('home.acknowledgments')}</h1>
      <div className="acknowledgments-page__list">
        {achieves.map(({ url }, index) => (
          <img 
            key={index + 1}
            src={loaded ? url : PlaceholderImage} 
            onLoad={handleImageLoaded} 
            loaded={loaded}
            alt="achieve_img"
          />
        ))}        
      </div>
    </div>
  );
}

export default Acknowledgments;