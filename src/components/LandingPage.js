import React, { Component } from 'react';
import styled from 'styled-components';
import PageWrapper from './styles/PageWrapper';
import Section from './styles/Section';
import Photos from './Photos';

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Photos />
      </React.Fragment>
    );
  }
}

const myValues = [
  {
    value: 'Live what you profess',
    desc: `I yearn for beauty in all forms. I want to blend art, maths and
  engineering together to break any stereotypical boundary. I hope
  you find your inspirational sparks among my collection of
  creations and musings here.`
  },
  {
    value: 'Creation over consumption',
    desc: `I yearn for beauty in all forms. I want to blend art, maths and
    engineering together to break any stereotypical boundary. I hope
    you find your inspirational sparks among my collection of
    creations and musings here.`
  },
  {
    value: 'Live in a more connected way',
    desc: `I yearn for beauty in all forms. I want to blend art, maths and
    engineering together to break any stereotypical boundary. I hope
    you find your inspirational sparks among my collection of
    creations and musings here.`
  },
  {
    value: 'Love what you do',
    desc: `I yearn for beauty in all forms. I want to blend art, maths and
    engineering together to break any stereotypical boundary. I hope
    you find your inspirational sparks among my collection of
    creations and musings here.`
  },
  {
    value: 'Take ownership of your life',
    desc: `I yearn for beauty in all forms. I want to blend art, maths and
    engineering together to break any stereotypical boundary. I hope
    you find your inspirational sparks among my collection of
    creations and musings here.`
  }
];

export default LandingPage;
