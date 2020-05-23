import React from 'react';
import mockAmulData from '../../assets/icecream/amul.json';
import mockKwalityWallsData from '../../assets/icecream/kwality-walls.json';
import parameters from '../../assets/icecream/parameters.json';
import ProductComparisonView from './ProductComparison.jsx';

const productData = { 
                        foreignProduct: mockKwalityWallsData,
                        localProduct: mockAmulData,
                        parameters: parameters
                    };

function ProductComparison() {
    return <ProductComparisonView
            productData={productData}/>;
}

export default ProductComparison;