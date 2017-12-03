import React from 'react';

import api from '../helpers/api';
import { Router } from '../routes';

import Head from 'next/head';

import Layout from 'components/Layout';
import Header from 'components/Header';
import PointsContainer from 'components/PointsContainer'

export default class extends React.Component {
    static async getInitialProps() {
        const userInfo = await api.getUser();
        return {
            userInfo: userInfo,
        };
    }

    constructor() {
        super();
        this._addPoints = this._addPoints.bind(this);
    }

    async _addPoints(qty) {
        try {
            await api.addPoints(qty);
            Router.pushRoute("/");
        } catch(err) {
            console.log(err)
        }

    }

    render() {
        const user = this.props.userInfo;

        return (
            <Layout user={user}>
                <Head>
                    <title>Aerolab Coding Challenge</title>
                </Head>
                <Header
                    title={'Points'}
                />
                <PointsContainer addPoints={this._addPoints} currentPoints={user.points}/>
            </Layout>
        );
    }
}
