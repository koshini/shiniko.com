import React, { Component } from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import NavTag from './styles/NavTag';

const Wrapper = styled.div`
  font-size: 2vmin;
  font-weight: 700;
  padding: 10vh 4vw;
  text-transform: uppercase;
  position: fixed;
  z-index: 999;
  pointer-events: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  box-sizing: border-box;

  > * {
    pointer-events: auto;
    position: relative;
  }
`;

const OuterNavTop = styled.div`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
`;

const OuterNavBottom = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
`;

const AboutTag = styled(NavTag)`
  position: absolute;
  right: 0;
  transform: rotate(-90deg);
  transform-origin: top right;
`;

const NameTag = styled(NavTag)`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: rotate(-90deg);
  transform-origin: bottom left;
`;

const ProjectsTag = styled(NavTag)`
  position: absolute;
  left: 0;
  transform: rotate(90deg);
  transform-origin: top left;
`;

class OuterNav extends Component {
  render() {
    return (
      <Wrapper className="outer-nav">
        <OuterNavTop>
          <AboutTag className="about" url="/about">
            About
          </AboutTag>
          <ProjectsTag className="projects" url="/projects">
            Projects
          </ProjectsTag>
        </OuterNavTop>
        <OuterNavBottom>
          <NameTag className="home" url="/">
            Shini Ko
          </NameTag>
          <Contact>Connect</Contact>
        </OuterNavBottom>
      </Wrapper>
    );
  }
}
export default OuterNav;
