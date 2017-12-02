import api from '../helpers/api';
import { Router } from '../routes';

import Layout from 'components/Layout';
import Header from 'components/Header';
import PurchaseResume from 'components/PurchaseResume';
import RedeemButton from 'components/RedeemButton';
import ProductLayout from 'components/ProductLayout';

export default class Product extends React.Component {
  static async getInitialProps({ query, req, res }) {
    const products = await api.getProducts();
    const userInfo = await api.getUser();

    const product = products.filter(product => product._id === query.id);

    // Producto no existente => 404 !

    if (product.length === 0) {
      if (res) {
        res.writeHead(301, {
          Location: '/404',
        });
        res.end();
        res.finished = true;
      } else {
        Router.replace('/404');
      }
    }

    return {
      product: product[0],
      userInfo: userInfo,
    };
  }

  constructor() {
    super();
    this._redeemAction = this._redeemAction.bind(this);
  }

  async _redeemAction(canBuy, product) {
    if (canBuy) {
      const redeem = await api.redeemProduct(product._id);
      if (redeem.error) {
        alert(
          'There has been an issue with your purchase. Suspicious behavior. NSA is on their way.',
        );
        return;
      }
      Router.pushRoute('/success?id=' + this.props.product._id);
    } else {
      api.addPoints(5000);
    }
  }

  render() {
    const product = this.props.product;
    const user = this.props.userInfo;
    const canBuy = user.points >= product.cost;
    return (
      <Layout name={user.name} points={user.points}>
        <Header title={product.name} />
        <ProductLayout>
          <PurchaseResume
            canBuy={canBuy}
            userPoints={user.points}
            costOfProduct={product.cost}
          />
          <div>
            {canBuy ? (
              <img
                src="https://media.giphy.com/media/uFtywzELtkFzi/giphy.gif"
                alt=""
              />
            ) : (
              <img
                src="https://media.giphy.com/media/3o6UB5RrlQuMfZp82Y/giphy.gif"
                alt=""
              />
            )}

            <RedeemButton
              onClick={() => {
                this._redeemAction(canBuy, product);
              }}
              canBuy={canBuy}
            />
          </div>
        </ProductLayout>
      </Layout>
    );
  }
}
