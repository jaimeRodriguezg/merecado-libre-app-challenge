import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Author = {
  __typename?: 'Author';
  lastname: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type GeneralItem = {
  __typename?: 'GeneralItem';
  condition: Scalars['String']['output'];
  free_shipping: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  price: Price;
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Item = {
  __typename?: 'Item';
  condition: Scalars['String']['output'];
  description: Scalars['String']['output'];
  free_shipping: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  pictures: Array<Picture>;
  price: Price;
  sold_quantity: Scalars['Int']['output'];
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ItemResponse = {
  __typename?: 'ItemResponse';
  author: Author;
  item: Item;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  perPage: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Picture = {
  __typename?: 'Picture';
  id: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Price = {
  __typename?: 'Price';
  amount: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  decimals: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  items: ItemResponse;
  searcher: SearcherResponse;
  /** Search with pagination */
  searcherPagination: SearcherResponsePagination;
};


export type QueryItemsArgs = {
  id: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type QuerySearcherArgs = {
  lastName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  search: Scalars['String']['input'];
};


export type QuerySearcherPaginationArgs = {
  lastName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};

export type SearcherResponse = {
  __typename?: 'SearcherResponse';
  author: Author;
  categories: Array<Scalars['String']['output']>;
  items: Array<GeneralItem>;
};

export type SearcherResponsePagination = {
  __typename?: 'SearcherResponsePagination';
  author: Author;
  categories: Array<Scalars['String']['output']>;
  items: Array<GeneralItem>;
  pageInfo: PageInfo;
};

export type ItemsQueryVariables = Exact<{
  itemsId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
}>;


export type ItemsQuery = { __typename?: 'Query', items: { __typename?: 'ItemResponse', item: { __typename?: 'Item', id: string, title: string, thumbnail: string, condition: string, free_shipping: boolean, sold_quantity: number, description: string, price: { __typename?: 'Price', currency: string, amount: number, decimals: number }, pictures: Array<{ __typename?: 'Picture', id: string, url: string }> }, author: { __typename?: 'Author', name: string, lastname: string } } };

export type SearcherQueryVariables = Exact<{
  name: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  search: Scalars['String']['input'];
}>;


export type SearcherQuery = { __typename?: 'Query', searcher: { __typename?: 'SearcherResponse', categories: Array<string>, author: { __typename?: 'Author', name: string, lastname: string }, items: Array<{ __typename?: 'GeneralItem', id: string, title: string, thumbnail: string, condition: string, free_shipping: boolean, price: { __typename?: 'Price', currency: string, amount: number, decimals: number } }> } };

export type SearcherPaginationQueryVariables = Exact<{
  search: Scalars['String']['input'];
  name: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearcherPaginationQuery = { __typename?: 'Query', searcherPagination: { __typename?: 'SearcherResponsePagination', categories: Array<string>, author: { __typename?: 'Author', name: string, lastname: string }, items: Array<{ __typename?: 'GeneralItem', id: string, title: string, thumbnail: string, condition: string, free_shipping: boolean, price: { __typename?: 'Price', currency: string, amount: number, decimals: number } }>, pageInfo: { __typename?: 'PageInfo', currentPage: number, perPage: number, totalPages: number, totalItems: number, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type PaginationInfoFieldsFragment = { __typename?: 'PageInfo', currentPage: number, perPage: number, totalPages: number, totalItems: number, hasPreviousPage: boolean, hasNextPage: boolean };

export type AuthorInfoFieldsFragment = { __typename?: 'Author', name: string, lastname: string };

export type PriceInfoFieldsFragment = { __typename?: 'Price', currency: string, amount: number, decimals: number };

export const PaginationInfoFieldsFragmentDoc = gql`
    fragment PaginationInfoFields on PageInfo {
  currentPage
  perPage
  totalPages
  totalItems
  hasPreviousPage
  hasNextPage
}
    `;
export const AuthorInfoFieldsFragmentDoc = gql`
    fragment AuthorInfoFields on Author {
  name
  lastname
}
    `;
export const PriceInfoFieldsFragmentDoc = gql`
    fragment PriceInfoFields on Price {
  currency
  amount
  decimals
}
    `;
export const ItemsDocument = gql`
    query Items($itemsId: String!, $name: String!, $lastName: String!) {
  items(id: $itemsId, name: $name, lastName: $lastName) {
    item {
      id
      title
      price {
        ...PriceInfoFields
      }
      thumbnail
      condition
      free_shipping
      sold_quantity
      description
      pictures {
        id
        url
      }
    }
    author {
      ...AuthorInfoFields
    }
  }
}
    ${PriceInfoFieldsFragmentDoc}
${AuthorInfoFieldsFragmentDoc}`;

/**
 * __useItemsQuery__
 *
 * To run a query within a React component, call `useItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemsQuery({
 *   variables: {
 *      itemsId: // value for 'itemsId'
 *      name: // value for 'name'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useItemsQuery(baseOptions: Apollo.QueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, options);
      }
export function useItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, options);
        }
export type ItemsQueryHookResult = ReturnType<typeof useItemsQuery>;
export type ItemsLazyQueryHookResult = ReturnType<typeof useItemsLazyQuery>;
export type ItemsQueryResult = Apollo.QueryResult<ItemsQuery, ItemsQueryVariables>;
export const SearcherDocument = gql`
    query Searcher($name: String!, $lastName: String!, $search: String!) {
  searcher(name: $name, lastName: $lastName, search: $search) {
    author {
      name
      lastname
    }
    items {
      id
      title
      price {
        currency
        amount
        decimals
      }
      thumbnail
      condition
      free_shipping
    }
    categories
  }
}
    `;

/**
 * __useSearcherQuery__
 *
 * To run a query within a React component, call `useSearcherQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearcherQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearcherQuery({
 *   variables: {
 *      name: // value for 'name'
 *      lastName: // value for 'lastName'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearcherQuery(baseOptions: Apollo.QueryHookOptions<SearcherQuery, SearcherQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearcherQuery, SearcherQueryVariables>(SearcherDocument, options);
      }
export function useSearcherLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearcherQuery, SearcherQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearcherQuery, SearcherQueryVariables>(SearcherDocument, options);
        }
export type SearcherQueryHookResult = ReturnType<typeof useSearcherQuery>;
export type SearcherLazyQueryHookResult = ReturnType<typeof useSearcherLazyQuery>;
export type SearcherQueryResult = Apollo.QueryResult<SearcherQuery, SearcherQueryVariables>;
export const SearcherPaginationDocument = gql`
    query SearcherPagination($search: String!, $name: String!, $lastName: String!, $limit: Int, $offset: Int) {
  searcherPagination(
    search: $search
    name: $name
    lastName: $lastName
    limit: $limit
    offset: $offset
  ) {
    author {
      ...AuthorInfoFields
    }
    items {
      id
      title
      price {
        ...PriceInfoFields
      }
      thumbnail
      condition
      free_shipping
    }
    categories
    pageInfo {
      ...PaginationInfoFields
    }
  }
}
    ${AuthorInfoFieldsFragmentDoc}
${PriceInfoFieldsFragmentDoc}
${PaginationInfoFieldsFragmentDoc}`;

/**
 * __useSearcherPaginationQuery__
 *
 * To run a query within a React component, call `useSearcherPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearcherPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearcherPaginationQuery({
 *   variables: {
 *      search: // value for 'search'
 *      name: // value for 'name'
 *      lastName: // value for 'lastName'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useSearcherPaginationQuery(baseOptions: Apollo.QueryHookOptions<SearcherPaginationQuery, SearcherPaginationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearcherPaginationQuery, SearcherPaginationQueryVariables>(SearcherPaginationDocument, options);
      }
export function useSearcherPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearcherPaginationQuery, SearcherPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearcherPaginationQuery, SearcherPaginationQueryVariables>(SearcherPaginationDocument, options);
        }
export type SearcherPaginationQueryHookResult = ReturnType<typeof useSearcherPaginationQuery>;
export type SearcherPaginationLazyQueryHookResult = ReturnType<typeof useSearcherPaginationLazyQuery>;
export type SearcherPaginationQueryResult = Apollo.QueryResult<SearcherPaginationQuery, SearcherPaginationQueryVariables>;