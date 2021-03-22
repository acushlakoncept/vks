import React from 'react';
import { Container } from 'react-bootstrap';
import Feature from '../components/Feature';
import VksProfiles from '../data/vksFeatures';

function FeatureSection() {
  return (
    <div className="feature-section">
      <Container className="features">

        { VksProfiles.map(profile => (
          <Feature
            key={profile.id}
            image={profile.image}
            title={profile.title}
            desc={profile.desc}
          />
        ))}
      </Container>
    </div>
  );
}

export default FeatureSection;
