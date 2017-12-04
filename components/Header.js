import styled from 'styled-components';
import constants from 'constants';

const COLOR = constants.STYLE_VARS.colors;

const Header = styled.div`
    height: 40vh;
    width: 100%;
    background: ${props =>
      props.background
        ? `url(${props.background}) 75% center no-repeat`
        : 'url(../../static/images/product-header.svg) center center no-repeat'};
    background-size: cover;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0 5vw;
    color: ${props => (props.background ? 'white' : COLOR.darkGreyText)};
    
    h1 {
      width: 50%;
      margin: 0.5em 0;
    }
);
`;

export default ({ background, title }) => (
  <Header background={background}>
    <h1>{title}</h1>
  </Header>
);
