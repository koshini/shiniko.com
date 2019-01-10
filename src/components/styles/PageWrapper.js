import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100vw;
  height: 150vh;
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: ${props => (props.dark ? 'palevioletred' : 'white')};
  > * {
    transform: translateY(-25vh);
    width: calc(100% - 2 * 100px);
    max-width: ${props => props.theme.maxWidth};
  }
`;

export default PageWrapper;
