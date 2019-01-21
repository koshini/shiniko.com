import React, { Component } from 'react';
import styled from 'styled-components';
import ContentWrapper from './styles/ContentWrapper';
import PageContainer from './styles/PageContainer';

const Now = styled.div`
  transition: all 0.2s ease-in;
  margin-top: 3rem;
  a {
    font-size: calc(1rem + 0.6vw);
    font-style: oblique;
  }
  &:hover {
    opacity: 0.6;
  }
`;

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <PageContainer
          className="about-page"
          backgroundColor={props => props.theme.mint}
        >
          <ContentWrapper
            className="content-wrapper"
            textColor={props => props.theme.black}
          >
            <div>
              <p>
                There is nothing that brings me more joy in life than creating.
              </p>
              <p>
                Growing up, I always wanted to be an artist or a designer, and
                spent countless hours sketching and painting. Fascinated by
                mathematics and driven by an affinity to design, I chose to
                pursue a degree in Applied Mathematics and Engineering. A few
                years ago, I stumbled upon coding for the very first time, and I
                was hooked. Nowadays, I lose track of time while tinkering on my
                computer. Coding has become one of my creative outlets and a
                tool that enables me to build things. However, this was not
                always the case. In my highschool years, I was put off by the
                preconceived notion of the industry being predominantly male and
                aesthetically unconcerned. I don’t want other teenage girls to
                be discouraged from programming for similar reasons.
              </p>
              <p>
                I intend not to fit in the “tech stereotype” but to break it. I
                want to blend art and engineering to break any preceived
                boundary between the two.
              </p>
            </div>
            <Now className="now-link">
              <a href="/about/now"> What am I up to now? </a>
            </Now>
          </ContentWrapper>
        </PageContainer>
      </React.Fragment>
    );
  }
}

export default About;
