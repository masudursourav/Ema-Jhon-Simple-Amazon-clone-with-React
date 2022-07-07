import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} = useParams();
    //const productDetail = product.find();
    return (
        <div>
            <h1>{productId} Details will be added soon</h1>
        </div>
    );
};

export default ProductDetail;