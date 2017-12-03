import styled from 'styled-components';
import constants from 'constants';

const COLOR = constants.STYLE_VARS.colors;

const ButtonStyle = styled.span`
  text-align: center;
  letter-spacing: 1px;
  border: 1px solid ${props => props.color};
  color: ${props => props.color};
  padding: 0.1em 0.4em;
  border-radius: 4px;
  margin: 0 auto;
  transition: 0.15s ease all;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${props => props.color};
  }
`;

export default ({ color, onClick, children }) => {
  return <ButtonStyle color={color ? color : "gray"} onClick={onClick}>{children}</ButtonStyle>;
};
