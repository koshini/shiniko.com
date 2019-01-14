import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

const NavElement = ({ className, children, url }) => (
  <Link className={className} to={url}>
    {children}
  </Link>
);

const NavTag = styled(NavElement)`
  letter-spacing: 0.1em;

  &:before {
    content: '';
    height: 0.5rem;
    background: ${props => props.theme.black};
    width: 100%;
    position: absolute;
    bottom: -0.8rem;
    display: block;
    margin: 0 auto;
    opacity: 0;
    transition: all 0.4s ease-out;
  }

  &:hover:before {
    opacity: 1;
  }
`;

export default NavTag;
