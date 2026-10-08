import React from 'react';
import DataFetching from '../DataFetching';
import { IMarq } from '../MarqueeNav';
import { Triangle } from 'lucide-react';

import ProductList from './ProductList';

const AllCards = async() => {
    const data2 = await DataFetching()
    return <ProductList data2={data2}></ProductList>
};

export default AllCards;