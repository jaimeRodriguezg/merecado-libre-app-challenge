'use client';

import { FC, ReactNode, useContext, useEffect, useReducer } from 'react';
import { BreadCrumbsContext } from './BreadCrumbsContext';
import { breadCrumbReducer } from './breadCrumbsReducer';

export interface BreadCrumbsState {
  categories: string[];
}

const BreadCrumbsInitialState: BreadCrumbsState = {
  categories: [],
};

interface Props {
  children: ReactNode;
}

export const BreadCrumbsProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(
    breadCrumbReducer,
    BreadCrumbsInitialState,
  );

  const addCategories = (categories: string[]) => {
    dispatch({ type: '[BreadCrumb] - addCategories', payload: categories });
  };

  const addCategory = (category: string) => {
    dispatch({
      type: '[BreadCrumb] - addCategories',
      payload: [...state.categories, category],
    });
  };

  return (
    <BreadCrumbsContext.Provider
      value={{
        ...state,
        //Methods

        addCategories,
        addCategory,
      }}
    >
      {children}
    </BreadCrumbsContext.Provider>
  );
};
