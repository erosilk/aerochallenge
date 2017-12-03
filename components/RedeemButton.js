import styled from 'styled-components';
import constants from 'constants';

const COLOR = constants.STYLE_VARS.colors;

const ButtonContainer = styled.div`
  background: ${COLOR.orange};
  padding: 1em;
  width: 100%;
  max-width: 300px;
  color: ${COLOR.white};
  border-radius: 50px;
  cursor: pointer;
  transition: 0.15s ease all;
  
  &:hover {
    box-shadow: -5px 8px #00000014;
    background: #dc7103;
  }
  p {
    color: inherit;
    margin: 0;
    width: 100%;
    text-align: center;
  }
`;

export default ({ canBuy, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      {canBuy ? <p>Get this product</p> : <p>GO GET SUM POINTS !1 !</p>}
    </ButtonContainer>
  );
};
