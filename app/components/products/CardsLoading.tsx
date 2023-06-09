'use clinet';
import React from 'react';
import CardProductLoadingDetail from './CardProductLoadingDetail';

const CardsProductsLoading = () => {
  return (
    <div className="flex flex-col pt-5">
      <CardProductLoadingDetail />
      <CardProductLoadingDetail />
      <CardProductLoadingDetail />
      <CardProductLoadingDetail />
    </div>
  );
};

export default CardsProductsLoading;
