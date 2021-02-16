import React from 'react';
import { Container } from 'react-bootstrap';
import Feature from './Feature';
import VksProfiles from '../data/vksFeatures';

function FeatureSection() {
  return (
    <Container className="feature-section d-flex justify-content-around">

      { VksProfiles.map(profile => (
        <Feature
          key={profile.id}
          image={profile.image}
          title={profile.title}
          desc={profile.desc}
        />
      ))}
    </Container>
  );
}

export default FeatureSection;
