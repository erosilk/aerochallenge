import styled from 'styled-components';
import constants from 'constants';
import DiscreteButton from "./DiscreteButton"

const COLOR = constants.STYLE_VARS.colors;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  justify-content: center;
  align-content: center;
  min-height: 500px;
  h1 {
    color: ${COLOR.orange};
    text-align: center;
    font-size: 2em;
  }
  img {
    height: 260px;
    width: 178px;
    margin: 0 auto;
  }
  
`;

export default ({ redirect }) => {
  return (
    <Container>
      <img src="../../static/images/lost.png" alt="" />
      <h1>Page not found!</h1>
      <DiscreteButton onClick={redirect}>GO TO HOME</DiscreteButton>
    </Container>
  );
};
