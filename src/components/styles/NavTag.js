import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

const NavElement = ({ className, children, url }) => (
  <Link className={className} to={url}>
    <div>{children}</div>
  </Link>
);

const NavTag = styled(NavElement)`
  letter-spacing: 0.1em;


  &:before {
    content: '';
    height: 0.3rem;
    background: ${props => props.theme.black};
    width: 100%;
    bottom: -1rem;
    position: absolute;
    display: block;
    margin: 0 auto;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover:before {
    opacity: 1;
    /* transform: translateY(-2rem); */
    bottom: 3rem;

  }

  /* div {
    &:hover {
      -webkit-text-stroke: 0.05em ${props => props.theme.black};
      color: transparent;
    }
  } */
`;

export default NavTag;
