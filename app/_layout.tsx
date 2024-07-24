import { Stack } from "expo-router";
import ApolloProviders from "@/provider/apollo-provider";
import AuthContext from "./_contexts/AuthProvider";

export default function RootLayout() {
  return (
    <ApolloProviders>
      <AuthContext>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </AuthContext>
    </ApolloProviders>
  );
}
