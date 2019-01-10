import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Contact from './Contact';

const OuterNav = styled.div`
  font-size: 24px;
  padding: 48px 56px;
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

const NavElement = ({ className, children, url }) => (
  <Link className={className} to={url}>
    {children}
  </Link>
);

const AboutTag = styled(NavElement)`
  position: absolute;
  right: 0;
  transform: rotate(-90deg);
  transform-origin: top right;
`;

const NameTag = styled(NavElement)`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: rotate(-90deg);
  transform-origin: bottom left;
`;

const ContactTag = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: rotate(90deg);
  transform-origin: bottom right;
`;

const ProjectsTag = styled(NavElement)`
  position: absolute;
  left: 0;
  transform: rotate(90deg);
  transform-origin: top left;
`;

class Nav extends Component {
  render() {
    return (
      <OuterNav>
        <OuterNavTop>
          <ProjectsTag className="projects" url="/projects">
            Projects
          </ProjectsTag>
          <AboutTag className="about" url="/about">
            About
          </AboutTag>
        </OuterNavTop>
        <OuterNavBottom>
          <NameTag className="NameTag" url="/">
            Shini Ko
          </NameTag>
          <Contact>Contact</Contact>
        </OuterNavBottom>
      </OuterNav>
    );
  }
}
export default Nav;
