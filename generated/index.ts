// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
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
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  _id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type InputPrice = {
  large?: InputMaybe<Scalars['String']['input']>;
  medium?: InputMaybe<Scalars['String']['input']>;
  small?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory?: Maybe<Array<Category>>;
  addProduct?: Maybe<Array<Product>>;
  addUser?: Maybe<User>;
};


export type MutationAddCategoryArgs = {
  input?: InputMaybe<AddCategoryInput>;
};


export type MutationAddProductArgs = {
  input?: InputMaybe<AddProductInput>;
};


export type MutationAddUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};

export type Price = {
  __typename?: 'Price';
  large?: Maybe<Scalars['Int']['output']>;
  medium?: Maybe<Scalars['Int']['output']>;
  small?: Maybe<Scalars['Int']['output']>;
};

export type Product = {
  __typename?: 'Product';
  categoryId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  imageURL?: Maybe<Array<Scalars['String']['output']>>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Price>;
};

export type Query = {
  __typename?: 'Query';
  getAllCategory?: Maybe<Array<Category>>;
  getAllProduct?: Maybe<Array<Product>>;
  getAllUser?: Maybe<Array<User>>;
  getOneUser?: Maybe<Scalars['String']['output']>;
};


export type QueryGetOneUserArgs = {
  input?: InputMaybe<GetOneUserInput>;
};

export type User = {
  __typename?: 'User';
  adress?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  favotites?: Maybe<Array<Scalars['String']['output']>>;
  fullName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

export type AddCategoryInput = {
  categoryName?: InputMaybe<Scalars['String']['input']>;
};

export type AddProductInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageURL?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<InputPrice>;
  size?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type GetOneUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type AddUserMutationVariables = Exact<{
  input?: InputMaybe<CreateUserInput>;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser?: { __typename?: 'User', fullName?: string | null, email?: string | null, password?: string | null, avatar?: string | null, favotites?: Array<string> | null, adress?: string | null } | null };

export type GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserQuery = { __typename?: 'Query', getAllUser?: Array<{ __typename?: 'User', fullName?: string | null, email?: string | null, password?: string | null, avatar?: string | null, favotites?: Array<string> | null, adress?: string | null }> | null };

export type QueryQueryVariables = Exact<{
  input?: InputMaybe<GetOneUserInput>;
}>;


export type QueryQuery = { __typename?: 'Query', getOneUser?: string | null };


export const AddUserDocument = gql`
    mutation addUser($input: createUserInput) {
  addUser(input: $input) {
    fullName
    email
    password
    avatar
    favotites
    adress
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;
export type AddUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>
    } & TChildProps;
export function withAddUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddUserMutation,
  AddUserMutationVariables,
  AddUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddUserMutation, AddUserMutationVariables, AddUserProps<TChildProps, TDataName>>(AddUserDocument, {
      alias: 'addUser',
      ...operationOptions
    });
};

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const GetAllUserDocument = gql`
    query getAllUser {
  getAllUser {
    fullName
    email
    password
    avatar
    favotites
    adress
  }
}
    `;
export type GetAllUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllUserQuery, GetAllUserQueryVariables>
    } & TChildProps;
export function withGetAllUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllUserQuery,
  GetAllUserQueryVariables,
  GetAllUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllUserQuery, GetAllUserQueryVariables, GetAllUserProps<TChildProps, TDataName>>(GetAllUserDocument, {
      alias: 'getAllUser',
      ...operationOptions
    });
};

/**
 * __useGetAllUserQuery__
 *
 * To run a query within a React component, call `useGetAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
      }
export function useGetAllUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
        }
export function useGetAllUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
        }
export type GetAllUserQueryHookResult = ReturnType<typeof useGetAllUserQuery>;
export type GetAllUserLazyQueryHookResult = ReturnType<typeof useGetAllUserLazyQuery>;
export type GetAllUserSuspenseQueryHookResult = ReturnType<typeof useGetAllUserSuspenseQuery>;
export type GetAllUserQueryResult = Apollo.QueryResult<GetAllUserQuery, GetAllUserQueryVariables>;
export const QueryDocument = gql`
    query Query($input: getOneUserInput) {
  getOneUser(input: $input)
}
    `;
export type QueryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<QueryQuery, QueryQueryVariables>
    } & TChildProps;
export function withQuery<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  QueryQuery,
  QueryQueryVariables,
  QueryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, QueryQuery, QueryQueryVariables, QueryProps<TChildProps, TDataName>>(QueryDocument, {
      alias: 'query',
      ...operationOptions
    });
};

/**
 * __useQueryQuery__
 *
 * To run a query within a React component, call `useQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useQueryQuery(baseOptions?: Apollo.QueryHookOptions<QueryQuery, QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
      }
export function useQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export function useQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export type QueryQueryHookResult = ReturnType<typeof useQueryQuery>;
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export type QuerySuspenseQueryHookResult = ReturnType<typeof useQuerySuspenseQuery>;
export type QueryQueryResult = Apollo.QueryResult<QueryQuery, QueryQueryVariables>;