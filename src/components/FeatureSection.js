import React from 'react';
import { Container } from 'react-bootstrap';
import Feature from './Feature';
import aboutImg from '../images/about_us-150x150.png';
import missionImg from '../images/mission-150x150.png';
import visionImg from '../images/vision-150x150.png';
import qualityImg from '../images/quality-150x150.jpg';

function FeatureSection() {
  return (
    <Container className="feature-section d-flex justify-content-around">
      <Feature
        image={aboutImg}
        title="About Us"
        desc="VKS Engineering &amp;
      Construction CO. is a company incorporated in
      Nigeria and is part of VKS Group, a global
      company with over 25 years of experience
      undertaking projects all around the world since 1981."
      />

      <Feature
        image={visionImg}
        title="Our Vision"
        desc="VKS Group’s vision is to bring to life projects
        aimed at supporting sustainable human habitation by
        effectively evaluating all aspects within a project
        framework all over the globe."
      />

      <Feature
        image={missionImg}
        title="Our Mission"
        desc="VKS Group’s mission is to become a forerunner
        amongst worlds’ major engineering, construction
        and project management organizations by delivering
        outstanding results to our clients; Read more"
      />

      <Feature
        image={qualityImg}
        title="Quality"
        desc="VKS Construction has established, documented,
        implemented, and maintained a Quality Management
        System to ensure the effectiveness of the business
        and to meet the needs &amp; expectations of … Read more"
      />
    </Container>
  );
}

export default FeatureSection;
