'use clinet';
import { createContext } from 'react';

interface ContextProps {
  categories: string[];
  //methods
  addCategories: (categories: string[]) => void;
  addCategory: (category: string) => void;
}

export const BreadCrumbsContext = createContext({} as ContextProps);
