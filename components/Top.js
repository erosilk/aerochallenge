import styled from 'styled-components'
import constants from 'constants'
import {Router} from '../routes'

const COLOR = constants.STYLE_VARS.colors

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background: ${COLOR.white}
`

const Barrilete = styled.img`
  height: 36px;
  width: 38.77px;
  margin-left: 5vw;
  cursor: pointer;
`

const UserData = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${COLOR.darkGreyText};
  font-size: 1em;
  text-align: right;
`

const Points = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2em 0.5em;
    background: ${COLOR.lightGray};
    border-radius: 50px;
    margin: 0 0.6em;
    .coin {
        margin-right: -7px;
        margin-bottom: -3px;
        margin-left: 2px;
    }
    margin-right: 5vw;
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
                <Barrilete onClick={() => Router.pushRoute("/")} src={"../../static/images/aerolab-logo.svg"}/>
                <UserData>
                    {this.props.name}
                    <Points>{this.props.points} <img src="../../static/images/icons/coin.svg" alt="Points" className="coin"/></Points>
                </UserData>
            </HeaderContainer>
        )
    }
}
