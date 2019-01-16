import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor || props.theme.lightgrey};
`;

export default PageContainer;
