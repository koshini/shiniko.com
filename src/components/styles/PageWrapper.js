import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100vw;
  height: ${props => (props.last ? '100vh' : '150vh')};
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: ${props => props.backgroundColor || props.theme.lightgrey};
  > * {
    transform: ${props =>
      props.last ? 'translateY(0)' : 'translateY(-25vh);'};
  }
`;

export default PageWrapper;
