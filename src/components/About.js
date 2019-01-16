import React, { Component } from 'react';
import styled from 'styled-components';
import ContentWrapper from './styles/ContentWrapper';
import PageContainer from './styles/PageContainer';
import PageWrapper from './styles/PageWrapper';

const Axioms = styled.p`
  position: relative;
`;

const Icon = ({ className, src }) => (
  <img className={className} src={src} alt="arrow" />
);

const Arrow = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 12px;
  width: 12px;
  transform: translateY(-50%);
`;

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <PageWrapper backgroundColor={props => props.theme.forestGreen}>
          <ContentWrapper>
            <div>
              <p>
                There is nothing that brings me more joy in life than creating.
              </p>
              <p>
                Growing up, I have always wanted to be an artist or a designer,
                and spent countless hours on sketching and painting. I chose to
                pursue a degree in Applied Mathematic and Engineering mesmerized
                by mathematics and driven by my interests in problem solving.
                However, programming was one of the last things I wanted to do.
                The preconceived notion of the industry had turned me off. A few
                years ago, I stumbled upon coding for the very first time, and I
                was hooked. Nowadays, I lose track of time while tinkering on my
                computer. Coding has become one of my creative outlets and a
                tool that enables me to build things I want to build.
              </p>
              <p>
                I intend not to fit in the “tech stereotype” but to break it. I
                don’t want any more teenage girls to be put off by the prejudice
                and discouraged from programming. I want to blend art and
                engineering together to break any stereotypical boundary.
              </p>
            </div>
          </ContentWrapper>
        </PageWrapper>
        <PageWrapper>
          <ContentWrapper>
            <p>
              I grew up in different countries and have lived in Japan, China
              and Canada for roughly 1/3 of my life each so far. Living in
              different countries and forever being an outsider - bing bombarded
              by cultural shocks starting at a young age - has made me develop a
              unique world outlook. I believe that culture and traditions are
              merely make-believes, and common sense is not at all common. I
              constantly question why we do what we do. How come something that
              is right in some parts of the world is awfully wrong in other
              parts? How should I live my life then?
            </p>
          </ContentWrapper>
        </PageWrapper>
      </React.Fragment>
    );
  }
}

export default About;
