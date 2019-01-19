import React, { Component } from 'react';
import PageContainer from './styles/PageContainer';
import ContentWrapper from './styles/ContentWrapper';

class Now extends Component {
  render() {
    return (
      <PageContainer className="now-page">
        <ContentWrapper>
          Currently, I'm finishing up my studies in Applied Maths and Computer
          Engineering at Queen's University in Kingston, Ontario. I'm developing
          my skills to be a full stack web developer with a focus on the front
          end.
        </ContentWrapper>
      </PageContainer>
    );
  }
}

export default Now;
