import styled from 'styled-components';
import constants from '../constants';

const COLOR = constants.STYLE_VARS.colors;
const BREAKPOINT = constants.STYLE_VARS.breakpoints;

const PointsBadge = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2em 0.5em;
  background: ${COLOR.darkGrey80};
  border-radius: 50px;
  color: ${COLOR.white};
  .coin {
    margin-right: -7px;
    margin-bottom: -2px;
    margin-left: 2px;
    width: 20px;
  }
  @media ${BREAKPOINT.smartphoneBig} {
    .coin {
      margin-right: -7px;
      margin-bottom: -3px;
      margin-left: 2px;
      width: auto;
    }
  }
`;

// language=LESS
const Item = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  background: ${COLOR.white};
  align-items: flex-end;
  padding: 1em;

  max-width: 340px;
  margin: auto;
  margin-top: 0;
  width: 100%;
  transition: 0.3s ease box-shadow, 0.3s ease transform;
  cursor: pointer;

  box-shadow: -1px 2px 7px 0px #00000014;
  &:hover {
    box-shadow: -1px 2px 7px 0px #00000044;
    transform: scale(1.03);
  }
  .text {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 70%;
    margin-bottom: 0.4em;
    margin-left: 0.8em;
    .category {
      color: ${COLOR.darkGrey};
    }
    .name {
      font-size: 1.2em;
    }
  }
  .img {
    width: 131px;
    border-right: 1px solid ${COLOR.grey};
  }
  img.product {
    width: 100%;
    min-height: 80px;
    object-fit: contain;
  }
  .buy {
    position: absolute;
    top: 1em;
    right: 1em;
    width: 30px;
    height: 30px;
    background: url('../../static/images/icons/buy-blue.svg');
    background-size: contain;
  }
  .overlay {
    display: none;
  }

  @media ${BREAKPOINT.smartphoneBig} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 276px;

    &:hover {
      .buy {
        background: url('../../static/images/icons/buy-white.svg');
        background-size: contain;
      }
      .overlay {
        display: flex;
      }
    }

    .img {
      border: none;
      border-bottom: 1px solid ${COLOR.grey};
      height: 190px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .buy {
      width: 42px;
      height: 42px;
    }
    .text {
      margin: 0;
      width: 100%;
      margin-top: 1em;
      > span:first-child {
        margin-bottom: 0.1em;
      }
    }
  }
`;

const Overlay = styled.div`
  position: absolute;

  background-image: linear-gradient(
    -180deg,
    rgba(10, 212, 250, 0.86) 0%,
    rgba(37, 187, 241, 0.86) 100%
  );

  font-size: 2em;
  color: white;

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInOverlay 0.3s;
  @keyframes fadeInOverlay {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .points {
    display: flex;
    align-items: center;
    img {
      margin-left: 3px;
      margin-top: 6px;
    }
  }
`;

export default ({ product, pointsNeeded, onClick }) => (
  <Item onClick={onClick}>
    <div className="img">
      <img className={'product'} src={product.img.url} alt={product.name} />
    </div>
    <div className="text">
      <span className={'category'}>{product.category}</span>
      <span className={'name'}>{product.name}</span>
    </div>
    <Overlay className={'overlay'}>
      <div className="points">
        {product.cost}
        <img src="../../static/images/icons/coin.svg" alt="" />
      </div>
    </Overlay>
    {pointsNeeded > 0 ? (
      <PointsBadge>
        You need {pointsNeeded}
        <img
          src="../static/images/icons/coin.svg"
          alt="Points"
          className="coin"
        />
      </PointsBadge>
    ) : (
      <div className="buy badge" />
    )}
  </Item>
);
