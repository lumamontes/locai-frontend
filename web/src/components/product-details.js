import React, { useState, useEffect } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { api } from '../services/api';
import { useParams } from 'react-router-dom';
import { useUser } from "../hooks/useUser"
import { Spinner } from 'reactstrap';

const Product_Details = () => {
    const { UserData, loadingUserData } = useUser()
    const { property_id } = useParams();
    const [loading, setLoading] = useState(false)
    const [property, setProperty] = useState([])
    const [images, setImages] = useState([])
    useEffect(() => {
        api.get(`/properties/${property_id}`).then((response) => {
            setProperty(response.data)
            setImages(response.data.files)
            setLoading(true)
        })
    }, []);
    return <div>
        <Navbar />
        {/* <PageHeader headertitle="Product Details" customclass="mb-0" /> */}
        {
            loading && loadingUserData ?
                <div>
                    <ProductSlider data={images} />
                    <ProductDetails data={property} loading={loading} user={UserData}/>
                </div>
                : 
                //TODO: criar componente para animação de loading
                <div className='d-flex justify-content-center'>
                    <Spinner/>
                </div>
        }
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Product_Details

