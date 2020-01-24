import React from 'react';
import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Home from "../components/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App = () => (
    <div className="page-wrap">
        <Helmet
            defaultTitle="UI seed"
            link={[
                /* eslint-disable global-require */
                { rel: 'icon', href: require('../styles/images/favicon-32x32.png'), sizes: '32x32' },
                { rel: 'icon', href: require('../styles/images/favicon-16x16.png'), sizes: '16x16' },
            ]}
        />
        <Header />
        <Home />
        {/*<Footer />*/}
        <ToastContainer />
    </div>
);

export default hot(module)(App);
