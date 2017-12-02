import styled from 'styled-components';
import constants from 'constants';

const COLOR = constants.STYLE_VARS.colors;

const Container = styled.div`
  display:flex;
  flex-direction: column;
  padding: 1em;
  justify-content: center;
  align-content: center;
  min-height: 500px;
  h1 {
    color: ${COLOR.orange};
    text-align: center;
    font-size: 2em;
  }
  img {
      height: 260px;
    width: 178px;
    margin: 0 auto;
  }
  span {
      text-align: center;
    letter-spacing: 1px;
    border: 1px solid gray;
    width: 100px;
    padding: 0.1em;
    border-radius: 4px;
    margin: 0 auto;
    transition: 0.15s ease all;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: ${COLOR.darkGreyText};
    }
  }
`

export default ({redirect}) => {
    return (
        <Container>
            <img src="../../static/images/lost.png" alt=""/>
            <h1>Page not found!</h1>
            <span onClick={redirect}>GO BACK</span>
        </Container>
    );
};