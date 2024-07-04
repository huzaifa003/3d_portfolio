// src/components/IframeComponent.jsx
import React from 'react';
import PropTypes from 'prop-types';

const IframeComponent = ({ src }) => {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <iframe
        width="1857"
        height="789"
        src={src}
        title="Convert .raw file to .dmg using Power ISO"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="no-referrer"
        allowFullScreen
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      ></iframe>
    </div>
  );
};

IframeComponent.propTypes = {
  src: PropTypes.string.isRequired,
};

export default IframeComponent;
