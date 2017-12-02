import styled from 'styled-components';
import constants from 'constants';

const COLOR = constants.STYLE_VARS.colors;
const BREAKPOINT = constants.STYLE_VARS.breakpoints;


const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  margin: 2em 0;
  justify-content: space-around;
  align-items: center;
  max-width: 900px;
  margin: auto;
  @media ${BREAKPOINT.tabletLand} {
    flex-direction: row;
    align-items: flex-start;
  }
`

export default ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
}