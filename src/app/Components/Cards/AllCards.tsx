import React from 'react';
import DataFetching from '../DataFetching';
import ProductList from './ProductList';

const AllCards = async() => {
    const data2 = await DataFetching()
    return <ProductList data2={data2}></ProductList>
};

export default AllCards;