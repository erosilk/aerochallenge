import api from '../helpers/api';
import { Router } from '../routes';

import Layout from 'components/Layout';
import Page404 from 'components/Page404';

export default class Error extends React.Component {
  static async getInitialProps({ query, req, res }) {
    const userInfo = await api.getUser();

    return {
      userInfo: userInfo,
    };
  }

  render() {
    const user = this.props.userInfo;

    return (
      <Layout name={user.name} points={user.points}>
        <Page404 redirect={() => Router.pushRoute('/')} />
      </Layout>
    );
  }
}
