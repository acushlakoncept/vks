import React from 'react';
import { Container } from 'react-bootstrap';
import FeaturedProjectItem from '../components/FeaturedProjectItem';
import featureProjects from '../data/featureProjects';

function Projects() {
  return (
    <section className="projects-section">
      <Container className="text-center">
        <h2 className="title">Latest Projects</h2>
        <p className="desc">
          VKS has achieved a wide reference list by successful undertakings on
          turn – key basis in the diversified fields such as residential,
          commercial, industrial buildings, highway construction and infrastructure
          works, complete factories of various sorts as well as waste water treatment plants.
        </p>
        <div className="projects-thumbnails">
          <ul className="latest-projects">
            { featureProjects.map(project => (
              <FeaturedProjectItem
                key={project.id}
                title={project.title}
                image={project.image}
                url={project.url}
                alt={project.alt}
              />
            )) }
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
