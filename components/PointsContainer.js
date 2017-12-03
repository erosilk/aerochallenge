import styled from 'styled-components';
import constants from 'constants';

import DiscreteButton from './DiscreteButton';

const BREAKPOINT = constants.STYLE_VARS.breakpoints;
const COLOR = constants.STYLE_VARS.colors;

const Container = styled.div`
  padding: 0 5vw;
  h3 {
    color: ${COLOR.darkGreyText};
  }
  .points {
    > *:not(:last-child) {
      margin-right: 1em;
    }
  }
  
  img {
    width: 100%;
  }
 
  
  @media ${BREAKPOINT.tabletLand} {
    .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
     text-align: center;
    > * {
      width: 50%;
      &.img {
        padding: 2em;
        img {
          width: 100%;
        }
      }
    }
  }
  }

`;

export default ({ currentPoints, addPoints }) => {
  return (
    <Container>
      {currentPoints <= 2500 ? (
        <div>
          <h3>Hey! Seems like you need some points.</h3>
          <p>
            Well, good news.<br />
            <strong>We're just giving them out for free.</strong> Yup, just like
            that. No strange bussiness.
          </p>
          <p>So... how many do ya want?!</p>
          <div className="points">
            <DiscreteButton onClick={() => addPoints(1000)}>1000</DiscreteButton>
            <DiscreteButton onClick={() => addPoints(5000)} color={COLOR.orange}>5000</DiscreteButton>
            <DiscreteButton onClick={() => addPoints(7500)} color={COLOR.cyan}>7500</DiscreteButton>
          </div>
        </div>
      ) : (
        <div className="row">
          <div>
            <h3>You got enough points!</h3>
            <p>Don't be selfish.</p>
          </div>
          <div className={'img'}>
            <img
              src="https://media.giphy.com/media/5kbyNCIGWx9Ly/giphy.gif"
              alt=""
            />
          </div>
        </div>
      )}
    </Container>
  );
};
