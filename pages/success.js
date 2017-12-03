import api from '../helpers/api';
import { Router } from '../routes';

import Head from 'next/head';

import Layout from 'components/Layout';
import Header from 'components/Header';
import SuccessContainer from 'components/SuccessContainer';


export default class Success extends React.Component {
    static async getInitialProps({ query, req, res }) {
        const products = await api.getProducts();
        const userInfo = await api.getUser();
        console.log(query)
        const product = products.filter(product => product._id === query.id);

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


    render() {
        const product = this.props.product;
        const user = this.props.userInfo;
        return (
            <Layout user={user}>
                <Head>
                    <title>Purchase successful</title>
                </Head>
                <Header title={"Congrats!"} />
                <SuccessContainer product={product} />
            </Layout>
        );
    }
}
