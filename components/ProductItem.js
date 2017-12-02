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
    margin-bottom: -3px;
    margin-left: 2px;
  }
`;

const Item = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  background: ${COLOR.white};
  align-items: flex-end;
  padding: 1em;

  max-width: 340px;
  margin: auto;
  width: 100%;
  transition: 0.3s ease box-shadow;
  box-shadow: -1px 2px 7px 0px #00000014;
  &:hover {
    box-shadow: -1px 2px 7px 0px #00000044;
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
  }

  @media ${BREAKPOINT.smartphoneBig} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 276px;
    .img {
      border: none;
      border-bottom: 1px solid ${COLOR.grey};
        height: 190px;
        width: 100%;
            display: flex;
    justify-content: center;
    align-items: center;
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

export default ({ product, pointsNeeded, onClick }) => (
  <Item onClick={onClick}>
    <div className="img">
      <img className={'product'} src={product.img.url} alt={product.name} />
    </div>
    <div className="text">
      <span className={'category'}>{product.category}</span>
      <span className={'name'}>{product.name}</span>
    </div>
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
      <img
        src="../static/images/icons/buy-blue.svg"
        alt="Points"
        className="buy"
      />
    )}
  </Item>
);
