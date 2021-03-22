import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturedProjectItem({
  // eslint-disable-next-line react/prop-types
  title, image, alt, url,
}) {
  return (
    <motion.li
      whileHover={{
        translateY: -1,
        scale: 1.1,
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img src={image} alt={alt} />
      <motion.a
        whileHover={{
        //   background: rgba(0, 0, 0, 0.65),
        }}
        href={url}
      >
        {title}
      </motion.a>
    </motion.li>
  );
}
