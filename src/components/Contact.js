import React, { Component } from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';

const Connect = styled.div`
  width: 100%;
  margin-left: 3rem;
`;

const ContactCard = styled.div`
  letter-spacing: 0.1em;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row-reverse;
  transform: rotate(90deg);
  transform-origin: bottom right;
  pointer-events: auto;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

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
    bottom: 3rem;
  }

  ul {
    width: 100%;
    margin: auto;
    padding: 0;
    transform: translateY(3px);

    li {
      flex: 1;
      width: 1em;
      margin: 0 1.5rem;
      display: inline-flex;

      a {
        img {
          max-width: 100%;
          height: auto;
          display: inline-block;
        }
      }
    }
  }
`;

class Contact extends Component {
  render() {
    return (
      <ContactCard className="ContactCard">
        {/* <Connect className="connect">Contact</Connect> */}
        <SocialIcons />
      </ContactCard>
    );
  }
}

export default Contact;
