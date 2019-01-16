import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: calc(100% - 2 * 10vw);
  max-width: ${props => props.theme.maxWidth};
  font-size: calc(1.2rem + 0.4vw);
  text-align: justify;
  color: ${props => props.theme.offWhite};
  padding: 40px;
  margin: 0 auto;
`;

export default ContentWrapper;
