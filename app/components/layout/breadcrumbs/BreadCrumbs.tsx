'use client';
import { FC, useContext, useEffect } from 'react';
import BreadCrumb from './BreadCrumb';
import BreadCrumbDetail from './BreadCrumbDetail';
import { BreadCrumbsContext } from '../../../context/Breadcrumbs';

interface BreadCrumbProps {
  categories?: string[] | undefined;
  category?: string;
}

const BreadCrumbs: FC<BreadCrumbProps> = ({ categories, category }) => {
  const {
    addCategory,
    addCategories,
    categories: categoriesProvider,
  } = useContext(BreadCrumbsContext);

  useEffect(() => {
    if (!categories) return;
    addCategories(categories);
  }, [categories]);

  useEffect(() => {
    if (!category) return;
    addCategory(category);
  }, [category]);

  if (!categoriesProvider?.length)
    return (
      <BreadCrumb>
        <BreadCrumbDetail path="">Inicio</BreadCrumbDetail>
      </BreadCrumb>
    );

  return (
    <BreadCrumb>
      {categoriesProvider.map((category, index, array) => (
        <BreadCrumbDetail key={category} path={`/items/?search=${category}`}>
          {category} {index < array.length - 1 ? '>' : ''}
        </BreadCrumbDetail>
      ))}
    </BreadCrumb>
  );
};

export default BreadCrumbs;
