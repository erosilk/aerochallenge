import styled from 'styled-components'
import constants from 'constants'
import PurchaseHistory from './PurchaseHistory'
import { Link } from '../routes';

const COLOR = constants.STYLE_VARS.colors

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background: ${COLOR.white};
  padding: 0 5vw;
`

const Barrilete = styled.img`
  height: 36px;
  width: 38.77px;
  cursor: pointer;
`

const UserData = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${COLOR.darkGreyText};
  font-size: 1em;
  text-align: right;
  > span {
    cursor: pointer;
    position: relative;
    &:hover:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background: ${COLOR.orange};
      bottom: -2px;
      left: 0;
      animation: expand 0.2s;
      @keyframes expand {
        0% {
          width: 0;
          margin-left: 50%;
        }
        100% {
          width: 100%;
          margin-left: 0%;
        }
      }
    }
  }
`

const Points = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4em 0.5em;
    background: ${COLOR.lightGray};
    border-radius: 50px;
    margin-left: 0.6em;
    .coin {
        margin-left: 4px;
    }
`


export default class Top extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleHistory: false
        }
    }

    render() {
        return (
            <HeaderContainer>
                <Link route={"/"}>
                    <Barrilete src={"../../static/images/aerolab-logo.svg"}/>
                </Link>
                <UserData>
                    <span onClick={() => this.setState((prevState) => {return {visibleHistory:!prevState.visibleHistory}})}>{this.props.name}</span>
                    <Points>{this.props.points} <img src="../../static/images/icons/coin.svg" alt="Points" className="coin"/></Points>
                  {
                    this.state.visibleHistory ? <PurchaseHistory history={this.props.history}/> : null
                  }
                </UserData>
            </HeaderContainer>
        )
    }
}
