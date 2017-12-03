import styled from 'styled-components';
import constants from 'constants';

const BREAKPOINT = constants.STYLE_VARS.breakpoints;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2em 0;
  justify-content: space-around;
  align-items: center;
  max-width: 900px;
  margin: auto;
  img {
    display: none;
  }
  @media ${BREAKPOINT.tabletLand} {
    flex-direction: row;
    align-items: flex-end;
    img {
      display: block;
      height: 155px;
      width: 280px;
      margin-bottom: 1em;
    }
  }
`;

export default ({ children }) => {
  return <Container>{children}</Container>;
};
