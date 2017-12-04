import styled from 'styled-components';
import constants from 'constants';
import DiscreteButton from './DiscreteButton';

const COLOR = constants.STYLE_VARS.colors;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  justify-content: center;
  align-content: center;
  min-height: 80vh;
  h1 {
    color: ${COLOR.orange};
    text-align: center;
    font-size: 2em;
    margin: 1em;
  }
  img {
    height: 260px;
    width: 178px;
    margin: 0 auto;
    animation: float 10s infinite;
    @keyframes float {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(-10px);
      }
      75% {
        transform: translateY(10px);
      }
      100% {
        transform: translateY(0);
      }
    }
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
