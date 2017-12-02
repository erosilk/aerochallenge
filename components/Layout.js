import Top from './Top';
import styled from 'styled-components';
import constants from 'constants';

const COLOR = constants.STYLE_VARS.colors;

const Layout = styled.div`
  background: ${COLOR.bgColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default ({ name, points, children }) => (
  <Layout>
    <Top name={name} points={points} />
    {children}
    <style jsx global>{`
        body {
            margin: 0;
        }
        * {
            font-family: "Source Sans Pro"
        }
    `}</style>
  </Layout>
);
