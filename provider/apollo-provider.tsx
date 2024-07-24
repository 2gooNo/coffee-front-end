"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import backEndURL from "@/utils/backEndURL";
interface Props extends React.PropsWithChildren {}

const ApolloProviders = ({ children }: Props) => {
  const client = new ApolloClient({
    uri: `${backEndURL}/api/route`,
    cache: new InMemoryCache(),
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviders;
