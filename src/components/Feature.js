import React from 'react';
import PropTypes from 'prop-types';

export default function Feature({ image, title, desc }) {
  return (
    <div className="feature-item">
      <img src={image} alt={title} />
      <h2 className="title">{title}</h2>
      <p className="desc">{desc}</p>
    </div>
  );
}

Feature.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
