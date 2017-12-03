import React from 'react';
import constants from 'constants';
import api from '../helpers/api';
import { Router } from '../routes';

import Head from 'next/head';

import Layout from 'components/Layout';
import Header from 'components/Header';
import ProductItem from 'components/ProductItem';
import ItemContainer from 'components/ItemContainer';
import Sorter from 'components/Sorter';

export default class extends React.Component {
  static async getInitialProps() {
    const products = await api.getProducts();
    const userInfo = await api.getUser();
    return {
      products: products,
      userInfo: userInfo,
    };
  }

  constructor() {
    super();
    this._sortProducts = this._sortProducts.bind(this);
    this.sortOptions = [
      //{ id: 'recent', name: 'Recent' },
      { id: 'highestPrice', name: 'Highest Price' },
      { id: 'lowestPrice', name: 'Lowest Price' },
    ];
    this.state = {
      sortBy: 'recent'
    };
  }

  componentDidMount() {
    Router.prefetchRoute('/product');
  }

  _sortProducts(products, sort) {
    switch (sort) {
      case 'lowestPrice':
        return products.sort((a, b) => a.cost - b.cost);
      case 'highestPrice':
        return products.sort((a, b) => a.cost - b.cost).reverse();
      default:
        return products;
    }
  }

  render() {
    const products = this.state.sortBy
      ? this._sortProducts(this.props.products, this.state.sortBy)
      : this.props.products;
    const user = this.props.userInfo;

    return (
      <Layout name={user.name} points={user.points}>
        <Head>
          <title>Aerolab Coding Challenge</title>
        </Head>
        <Header
          background={'../../static/images/header-x1.png'}
          title={'Electronics'}
        />
        <Sorter options={this.sortOptions} current={this.state.sortBy} onClick={(id) => this.setState({sortBy: id})} />
        <ItemContainer>
          {this.props.products.map(product => (
            <ProductItem
              key={product._id}
              pointsNeeded={product.cost - user.points}
              product={product}
              onClick={() =>
                Router.pushRoute(
                  `/product/${product._id}/${product.name
                    .split(' ')
                    .join('')} `,
                )
              }
            />
          ))}
        </ItemContainer>
      </Layout>
    );
  }
}
