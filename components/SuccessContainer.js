import styled from 'styled-components';
import constants from 'constants';
import DiscreteButton from './DiscreteButton'

import { Router } from '../routes';


const COLOR = constants.STYLE_VARS.colors;

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1em;
  p {
    color: ${COLOR.orange};
    text-align: center;
    font-weight: bold;
    font-size: 1.1em;
  }
  .img {
    border: 1px solid ${COLOR.orange};
    width: 80%;
    margin: 1em;
    margin-bottom: 2em;
    max-width: 362px;
  }
  img {
    width: 100%;
  }
  
`;

export default ({ product }) => {
    return (
        <SuccessContainer>
            <p>You just purchased a shiny {product.name}</p>
            <div className="img">
                <img src={product.img.hdUrl} alt=""/>
            </div>
            <DiscreteButton color={COLOR.orange} onClick={() => Router.pushRoute("/")}>BROWSE MORE PRODUCTS</DiscreteButton>
        </SuccessContainer>
    );
};