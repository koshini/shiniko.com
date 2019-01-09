import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: ${props => props.theme.maxWidth};
  height: 100vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: ${props => props.backgroundColor || 'white'};
`;

export default PageContainer;
