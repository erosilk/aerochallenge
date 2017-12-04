import styled from "styled-components";
import moment from "moment";
import constants from "constants";
import { Link } from '../routes';

const COLOR = constants.STYLE_VARS.colors;

const HistoryContainer = styled.div`
  position: absolute;
  width: 80vw;
  max-width: 300px;
  z-index: 2;
  right: 0;
  top: 50px;
  height: 310px;
  background: white;
  overflow: scroll;
  padding: 1em;
  border-radius: 3px;
  box-shadow: -1px 2px 7px 0px #00000014;
  animation: purchaseHistory 0.3s;
  @keyframes purchaseHistory {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    margin: 0.8em 0;
  }
  .history {
    height: 100%;
    overflow: scroll;
    padding-top: 1.8em;
  }
  h3 {
    text-align: center;
    color: ${COLOR.grey};
  }
  .header {
    height: 3em;
    background: white;
    border-radius: 3px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
  }
  a {
    color: ${COLOR.darkGreyText};
    text-decoration: none;
  }
`;

export default ({ history }) => {
  return (
    <HistoryContainer>
      <div className="header">
        <h3>YOUR PURCHASES</h3>
      </div>
      <div className="history">
        {history
          .slice()
          .reverse()
          .map(item => (
            <div className={"row"}>
              <Link route={`/product/${item.productId}/${item.name.split(" ").join("")}`}>{item.name}</Link> <span>{moment(item.createDate).fromNow()}</span>
            </div>
          ))}
      </div>
    </HistoryContainer>
  );
};
