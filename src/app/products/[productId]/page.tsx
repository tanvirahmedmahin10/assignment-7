import PorductRelated from '@/app/Components/PorductRelated';
import React, { Suspense, use } from 'react';
import PageLoading from './loading';

export interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: Change;
  markets: Market[];
}

export interface Change {
  dir: string;
  pct: number;
}

export interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

function ProductContent({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = use(params);
  return <PorductRelated productId={productId} />;
}

const page = ({ params }: { params: Promise<{ productId: string }> }) => {
  return (
    <Suspense fallback={<PageLoading></PageLoading>}>
      <ProductContent params={params} />
    </Suspense>
  );
};

export default page;