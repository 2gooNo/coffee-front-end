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

export type Mutation = {
  __typename?: 'Mutation';
  addUser?: Maybe<User>;
};


export type MutationAddUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};

export type Query = {
  __typename?: 'Query';
  getAllUser?: Maybe<Array<User>>;
  getOneUser?: Maybe<User>;
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

export type CreateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type GetOneUserInput = {
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type AddUserMutationVariables = Exact<{
  input?: InputMaybe<CreateUserInput>;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser?: { __typename?: 'User', fullName?: string | null, email?: string | null, password?: string | null, avatar?: string | null, favotites?: Array<string> | null, adress?: string | null } | null };

export type GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserQuery = { __typename?: 'Query', getAllUser?: Array<{ __typename?: 'User', fullName?: string | null, email?: string | null, password?: string | null, avatar?: string | null, favotites?: Array<string> | null, adress?: string | null }> | null };

export type GetOneUserQueryVariables = Exact<{
  input?: InputMaybe<GetOneUserInput>;
}>;


export type GetOneUserQuery = { __typename?: 'Query', getOneUser?: { __typename?: 'User', fullName?: string | null, email?: string | null, password?: string | null, avatar?: string | null, favotites?: Array<string> | null, adress?: string | null } | null };


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
export const GetOneUserDocument = gql`
    query getOneUser($input: getOneUserInput) {
  getOneUser(input: $input) {
    fullName
    email
    password
    avatar
    favotites
    adress
  }
}
    `;
export type GetOneUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneUserQuery, GetOneUserQueryVariables>
    } & TChildProps;
export function withGetOneUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneUserQuery,
  GetOneUserQueryVariables,
  GetOneUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneUserQuery, GetOneUserQueryVariables, GetOneUserProps<TChildProps, TDataName>>(GetOneUserDocument, {
      alias: 'getOneUser',
      ...operationOptions
    });
};

/**
 * __useGetOneUserQuery__
 *
 * To run a query within a React component, call `useGetOneUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneUserQuery(baseOptions?: Apollo.QueryHookOptions<GetOneUserQuery, GetOneUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneUserQuery, GetOneUserQueryVariables>(GetOneUserDocument, options);
      }
export function useGetOneUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneUserQuery, GetOneUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneUserQuery, GetOneUserQueryVariables>(GetOneUserDocument, options);
        }
export function useGetOneUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetOneUserQuery, GetOneUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOneUserQuery, GetOneUserQueryVariables>(GetOneUserDocument, options);
        }
export type GetOneUserQueryHookResult = ReturnType<typeof useGetOneUserQuery>;
export type GetOneUserLazyQueryHookResult = ReturnType<typeof useGetOneUserLazyQuery>;
export type GetOneUserSuspenseQueryHookResult = ReturnType<typeof useGetOneUserSuspenseQuery>;
export type GetOneUserQueryResult = Apollo.QueryResult<GetOneUserQuery, GetOneUserQueryVariables>;