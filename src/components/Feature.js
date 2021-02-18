import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function Feature({ image, title, desc }) {
  return (
    <FadeInWhenVisible>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
        className="feature-item"
      >
        <motion.img
          whileHover={{
            scale: 1.1,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="feature-item__img"
          src={image}
          alt={title}
        />
        <h2 className="title pt-2">{title}</h2>
        <p className="desc">{desc}</p>
      </motion.div>
    </FadeInWhenVisible>
  );
}

Feature.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
