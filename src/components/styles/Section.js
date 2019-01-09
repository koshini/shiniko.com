import styled from 'styled-components';

const Section = styled.div`
  max-width: 800px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 0 ${props => props.theme.padding};
  background-color: ${props => props.backgroundColor || 'white'};
  margin: 0 auto;
`;

export default Section;
