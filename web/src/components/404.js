import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Error from './section-components/error';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const ErrorPage = () => {
    return <div>
        <Navbar />
        <Error />
        <Footer />
    </div>
}

export default ErrorPage

