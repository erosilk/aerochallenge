import Top from './Top';
import styled from 'styled-components';
import constants from 'constants';

const COLOR = constants.STYLE_VARS.colors;
const BREAKPOINT = constants.STYLE_VARS.breakpoints;

const Layout = styled.div`
  background: ${COLOR.bgColor};
  min-height: 100vh;
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  > *:not(:first-child) {
    animation: fadeIn 1s;
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
  @media ${BREAKPOINT.tabletLand} {
    font-size: 18px;
  }
`;

export default ({ user, children }) => (
  <Layout>
    <Top history={user.redeemHistory} name={user.name} points={user.points} />
    {children}
  </Layout>
);
