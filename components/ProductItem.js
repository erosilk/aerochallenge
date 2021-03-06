import styled from "styled-components";
import constants from "../constants";
import LazyLoad from "react-lazyload";
import { forceCheck } from "react-lazyload";
import { Link } from "../routes";

const COLOR = constants.STYLE_VARS.colors;
const BREAKPOINT = constants.STYLE_VARS.breakpoints;

const PointsBadge = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3em 0.5em;
  background: ${COLOR.darkGrey80};
  border-radius: 50px;
  color: ${COLOR.white};
  .coin {
    margin-left: 2px;

    width: 20px;
  }

  @media ${BREAKPOINT.smartphoneBig} {
    padding: 0.4em 0.5em;
    .coin {
      margin-left: 5px;
      width: auto;
    }
  }
`;

const Item = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  background: ${COLOR.white};
  align-items: flex-end;
  padding: 1em;

  border-radius: 3px;

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
  .loading {
    transform: scale(0.3);
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
    display: none;
    position: absolute;
    top: 1em;
    right: 1em;
    width: 30px;
    height: 30px;
    background: url("../../static/images/icons/buy-blue.svg");
    background-size: contain;
    z-index: 2;
  }
  .overlay {
    display: none;
  }

  .mobilecost {
    display: flex;
    position: absolute;
    top: 1em;
    right: 1em;
    justify-content: center;
    align-items: center;
    img {
      width: 30px;
      margin-left: 0.3em;
    }
  }

  @media ${BREAKPOINT.tabletPort} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 276px;

    .buy {
      display: block;
    }

    .mobilecost {
      display: none;
    }

    &:hover {
      .buy {
        background: url("../../static/images/icons/buy-white.svg");
        background-size: contain;
      }
      .overlay {
        display: flex;
      }

      box-shadow: -1px 6px 20px 2px #00000030;
      transform: scale(1.05) translateY(-7px);
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
    img {
      height: 100%;
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
  display: flex;

  background-image: linear-gradient(-180deg, rgba(10, 212, 250, 0.86) 0%, rgba(37, 187, 241, 0.86) 100%);

  border-radius: 3px;

  font-size: 2em;
  color: white;

  width: calc(100% + 1px);
  height: calc(100% + 1px);
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
      margin-left: 5px;
      margin-top: 6px;
    }
  }
`;

export default class extends React.Component {
  componentDidUpdate() {
    forceCheck();
  }

  render() {
    return (
      <Link route={this.props.route}>
        <Item onClick={this.props.onClick}>
          <div className="img">
            <LazyLoad height={80} offset={280}>
              <img className={"product"} src={this.props.product.img.url} alt={this.props.product.name} />
            </LazyLoad>
          </div>
          <div className="text">
            <span className={"category"}>{this.props.product.category}</span>
            <span className={"name"}>{this.props.product.name}</span>
          </div>

          {this.props.pointsNeeded > 0 ? (
            <PointsBadge className={"pointsBadge"}>
              You need {this.props.pointsNeeded}
              <img src="../static/images/icons/coin.svg" alt="Points" className="coin" />
            </PointsBadge>
          ) : (
            <div>
              <div className="mobilecost">
                <span>{this.props.product.cost}</span> <img src="../../static/images/icons/coin.svg" alt="points" />
              </div>{" "}
              <div className="buy badge" />
            </div>
          )}
          <Overlay className={"overlay"}>
            <div className="points">
              {this.props.product.cost}
              <img src="../../static/images/icons/coin.svg" alt="points" />
            </div>
          </Overlay>
        </Item>
      </Link>
    );
  }
}
