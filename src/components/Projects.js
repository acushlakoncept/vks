import React from 'react';
import { Container } from 'react-bootstrap';
import airportImg from '../images/airport_project.jpg';
import coconut from '../images/coconut.jpg';
import odiokwu from '../images/ph1-270x240.jpg';
import kfm from '../images/kingsflourmill.jpg';
import phase3 from '../images/vks_phaseIII.jpg';
import syringe from '../images/syringe_office.jpg';
import tower from '../images/tower_gal.jpg';
import phase1 from '../images/phase1.jpg';

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
            <li>
              <img src={airportImg} alt="airport" />
              <a href="#airport">Victor Attah International Airport Project</a>
            </li>
            <li>
              <img src={kfm} alt="kings flour mill" />
              <a href="#airport">Kings Flour Mill Factory Project</a>
            </li>
            <li>
              <img src={odiokwu} alt="Odiokwu" />
              <a href="#airport">Odiokwu Road Project</a>
            </li>
            <li>
              <img src={phase3} alt="phase 3" />
              <a href="#airport">
                Construction of 12,742KM Awa
                Iman-Asong-Ikot Edim-Ikot Emem Road With
                2 Bridges in Onna &amp; Mkpat Enin LGAs
              </a>
            </li>
            <li>
              <img src={syringe} alt="jubilee syringe" />
              <a href="#airport">Construction of Jubilee Syringe Manufacturing Factory</a>
            </li>
            <li>
              <img src={coconut} alt="coconut" />
              <a href="#airport">St. Gabriel Coconut Oil Factory Project</a>
            </li>
            <li>
              <img src={tower} alt="tower" />
              <a href="#airport">21 Storey Office Building Project</a>
            </li>
            <li>
              <img src={phase1} alt="phase 1" />
              <a href="#airport">
                Dualization of 1KM Awa Ikot Nkan Road With
                Outfall Drains in Onna LGA
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
