import styled from 'styled-components';
import constants from 'constants';

const COLOR = constants.STYLE_VARS.colors;

const ResumeContainer = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid rgba(255, 118, 0, 0.36);
  padding: 2em;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 460px;
  height: 220px;
  justify-content: space-around;
  margin-bottom: 1em;
`;

const ResumeItem = styled.div`
  display: flex;
  justify-content: space-between;
  span:first-child {
    width: 70%;
    color: ${COLOR.darkGreyText};
    text-align: right;
  }
  span:last-child {
    width: 20%;
    color: ${COLOR.orange};
    text-align: left;
  }
`;

const Warning = styled.div`
  position: absolute;
  top:0;left:0;
  width: 100%;
  padding: 0.3em;
  color: white;
  background-color: ${COLOR.darkGrey80};
  text-align: center;
  
`

export default ({ userPoints, costOfProduct, canBuy }) => {
  return (
    <ResumeContainer>
        {!canBuy ? <Warning>Oops! You don't have enough points for this item</Warning> : null}
      <ResumeItem>
        <span>AVAILABLE POINTS</span>
        <span>{userPoints}</span>
      </ResumeItem>
      <ResumeItem>
        <span>COST OF PRODUCT</span>
        <span>{costOfProduct}</span>
      </ResumeItem>
      <ResumeItem>
        <span>
          {canBuy
            ? 'YOUR BALANCE AFTER THE PURCHASE'
            : 'POINTS YOU NEED TO BUY THIS'}
        </span>
        <span>
          {canBuy ? userPoints - costOfProduct : costOfProduct - userPoints}
        </span>
      </ResumeItem>
    </ResumeContainer>
  );
};
