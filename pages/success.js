import api from '../helpers/api';
import { Router } from '../routes';

import Layout from 'components/Layout';
import Header from 'components/Header';
import SuccessContainer from 'components/SuccessContainer';


export default class Product extends React.Component {
    static async getInitialProps({ query, req, res }) {
        const products = await api.getProducts();
        const userInfo = await api.getUser();
        console.log(query)
        const product = products.filter(product => product._id === query.id);

        return {
            product: product[0],
            userInfo: userInfo,
        };
    }


    render() {
        const product = this.props.product;
        const user = this.props.userInfo;
        return (
            <Layout name={user.name} points={user.points}>
                <Header title={"Congrats!"} />
                <SuccessContainer product={product} />
            </Layout>
        );
    }
}
