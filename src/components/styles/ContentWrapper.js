import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: calc(100% - 2 * 6vw);
  max-width: ${props => props.theme.maxWidth};
  font-size: calc(1rem + 0.6vw);
  text-align: justify;
  color: ${props => props.textColor || props.theme.black};
  /* padding: 28px; */
  margin: 0 auto;
`;

export default ContentWrapper;
