import React, { Component } from 'react';
import styled from 'styled-components';
import ContentWrapper from './styles/ContentWrapper';
import PageContainer from './styles/PageContainer';

const ProjectGrid = styled(ContentWrapper)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17em, 1fr));
  grid-gap: 4rem calc(1rem + 2vw);
  font-size: 1.6rem;
  padding: 10vh 0;
`;

const GridElement = styled.div`
  height: 80vh;
  position: relative;
`;

const Project = styled.a`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Background = styled.div`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 0;
  position: absolute;
  pointer-events: none;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  text-align: left;
  padding: 1.5em;
  height: 100%;
  width: 100%;
  > * {
    color: ${props => props.theme.black};
    z-index: 10;
  }

  h2 {
    margin: 0 0 0.1em 0;
    font-family: 'Ubuntu Condensed', sans-serif;
  }

  h4 {
    margin: 0 0 3em 0;
    font-family: 'Ubuntu Condensed', sans-serif;
  }

  p {
    margin-top: 0;
    display: none;
  }

  button {
    display: none;
    width: 10em;
    text-transform: uppercase;
    padding: 1.25em 2.5em;
    margin-top: 3em;
    border: 2px solid ${props => props.theme.offWhite};
    background-color: transparent;
    cursor: pointer;

    &:hover {
      transition: all 0.2s ease-in-out;
      background-color: ${props => props.theme.offWhite};
      color: ${props => props.theme.black};
    }
  }

  &:hover {
    transition: all 0.3s cubic-bezier(0.5, 0.12, 0.24, 1.45);
    justify-content: center;
    transform: scale(1.1);
    background-color: ${props => props.theme.black};
    box-shadow: 0px 15px 30px 3px rgba(68, 68, 78, 0.7);

    > * {
      color: ${props => props.theme.offWhite};
      display: inline-block;
    }
  }
`;

class Projects extends Component {
  render() {
    return (
      <PageContainer
        className="project-page"
        backgroundColor={props => props.theme.flesh}
      >
        <ProjectGrid className="project-grid">
          <GridElement className="commeunite">
            <Project
              href="https://commeunite.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Background url="http://res.cloudinary.com/shiniko/image/upload/c_scale,w_600/v1547813763/tote.jpg" />
              <ProjectContent>
                <h2>Comme Unité</h2>
                <h4>A Brand</h4>
                <p>
                  I, along with a friend, started Comme Unité to collaborate
                  with emerging artists to create quality clothing products. We
                  are building a platform that empowers artists to execute their
                  ideas and connect with wider audiences. The goal is to create
                  a bridge between artists and their fans by removing barriers
                  between ideation and production.
                </p>
                <button>Explore</button>
              </ProjectContent>
            </Project>
          </GridElement>
          <GridElement className="julia">
            <Project
              href="https://codepen.io/shiniko/live/JwQVZR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Background url="https://res.cloudinary.com/shiniko/image/upload/v1547845100/julia-set.gif" />
              <ProjectContent>
                <h2>Julia Set</h2>
                <h4>A Fractal Visualization</h4>
                <p>
                  The Julia set is closely related to the well-known Mandelbrot
                  set. Each point in the complex number plane spawns a different
                  Julia set; Every point in the Mandelbrot set corresponds to a
                  connected Julia set while those outside of it spawn
                  disconnected ones.
                </p>
                <p>
                  I created an interactive program to demonstrate this - move
                  your mouse on the canvas to see how the shape of the Julia set
                  changes.
                </p>
                <button>Explore</button>
              </ProjectContent>
            </Project>
          </GridElement>
          <GridElement className="random-walk">
            <Project
              href="https://codepen.io/shiniko/live/mzMKvy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Background url="https://res.cloudinary.com/shiniko/image/upload/v1547843293/random-walk.gif" />
              <ProjectContent>
                <h2>Random Walk</h2>
                <h4>A Stochastic Process Visualization</h4>
                <p>
                  Random walk - a path formed by succesive summation of steps of
                  fixed length - is a topic studied widely in probability
                  theory. Many processes in real life can be approximated using
                  the random walk model, such as the fluctuation of stock price.
                </p>
                <p>
                  I made a simple visualization of this process in a 2D plane.
                </p>
                <button>Explore</button>
              </ProjectContent>
            </Project>
          </GridElement>
        </ProjectGrid>
      </PageContainer>
    );
  }
}

export default Projects;
