import React from 'react'
import constants from 'constants'
import api from '../helpers/api'
import {Router} from '../routes'


import Layout from 'components/Layout'
import Header from 'components/Header'
import ProductItem from 'components/ProductItem'
import ItemContainer from 'components/ItemContainer'


export default class extends React.Component {
    static async getInitialProps() {
        const products = await api.getProducts()
        const userInfo = await api.getUser()
        return {
            products: products,
            userInfo: userInfo
        }
    }

    constructor() {
        super();

        this.state = {

        }
    }

    componentDidMount() {
        Router.prefetchRoute("/product")
    }


    render() {
        return (
            <Layout name={this.props.userInfo.name} points={this.props.userInfo.points}>
                <Header background={"../../static/images/header-x1.png"} title={"Electronics"}/>
                <ItemContainer>
                    {this.props.products.map(product =>
                        <ProductItem key={product._id}
                                     pointsNeeded={product.cost - this.props.userInfo.points}
                                     product={product}
                                     onClick={() => Router.pushRoute(`/product/${product._id}/${product.name.split(" ").join("")} `)}
                        />
                    )}
                </ItemContainer>
            </Layout>
        )
    }
}