import api from '../helpers/api'
import Router from 'next/router'

import Layout from 'components/Layout'
import Header from 'components/Header'

export default class Product extends React.Component {
    static async getInitialProps ({query, req, res}) {
        const products = await api.getProducts();
        const userInfo = await api.getUser()

        const product = products.filter(product => product._id === query.id)


       if (product.length === 0) {
            if (res) {
                res.writeHead(301, {
                    Location: '/404'
                })
                res.end()
                res.finished = true
            } else {
                Router.replace('/404')
            }
        }

        return {
            product: product[0],
            userInfo: userInfo
        }
    }
    render () {
        const product = this.props.product;
        return (
            <Layout name={this.props.userInfo.name} points={this.props.userInfo.points}>
                <Header title={product.name} />
                <p>Tenés {this.props.userInfo.points} puntos</p>
            </Layout>

        )
    }
}