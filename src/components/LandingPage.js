import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Photos from './Photos';
import BottomWrapper from './BottomWrapper';

const Intro = styled.div`
  width: calc(100% - 2 * 100px);
  max-width: ${props => props.theme.maxWidth};
  font-size: calc(1.8rem + 0.4vw);
  color: ${props => props.theme.offWhite};
  padding: 40px;
  margin: 0 auto;
`;

const Strong = styled.strong`
  font-size: 2em;
  font-weight: 700;
  -webkit-text-stroke: 0.03em ${props => props.theme.offWhite};
  color: transparent;
`;

const MyLink = ({ className, children, url }) => (
  <Link className={className} to={url}>
    {children}
  </Link>
);

const ReadMore = styled(MyLink)`
  font-size: 0.8em;
  opacity: 0.7;
  color: ${props => props.theme.offWhite};

  :hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;
class LandingPage extends Component {
  state = {
    showBottom: false,
    bottomSendToBack: true
  };

  toggleBottomVisibility = bottomVisibility => {
    this.setState({ showBottom: bottomVisibility });
  };

  render() {
    return (
      <React.Fragment>
        <Photos toggleBottomVisibility={this.toggleBottomVisibility} />
        <BottomWrapper visibility={this.state.showBottom}>
          <Intro className="intro">
            <p>
              <Strong>Hey, this is Shini Ko. </Strong>
              <br />
              I'm a graduating Applied Maths and Computer Engineering student
              based in Ontario, Canada. Currently, I'm developing my skills to
              be a full stack web developer with a focus on the front end.
            </p>
          </Intro>
        </BottomWrapper>
      </React.Fragment>
    );
  }
}

export default LandingPage;
