import React, { useState, useEffect } from 'react';
import Navbar from './global-components/navbar';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { api } from '../services/api';
import { useParams } from 'react-router-dom';
import { useUser } from "../hooks/useUser"
import { Spinner } from 'reactstrap';
import { useQuery } from 'react-query';

const Product_Details = () => {
    const { UserData, loadingUserData } = useUser()
    const { property_id } = useParams();
    const { data, isLoading, error } = useQuery('property_id', async () => {
        const response = await api.get(`/properties/${property_id}`)
        const data = response.data
        return data
    })
    return <div>
        <Navbar />
        {/* <PageHeader headertitle="Product Details" customclass="mb-0" /> */}
        {
            isLoading ?
                //TODO: criar componente para animação de loading
                <div className='d-flex justify-content-center'>
                    <Spinner />
                </div>
                : error ?
                    <p>Erro! {error.message} </p>
                    :
                    <div>
                        <ProductSlider data={data.files} />
                        <ProductDetails data={data} loading={isLoading} user={UserData} />
                    </div>
        }
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Product_Details

