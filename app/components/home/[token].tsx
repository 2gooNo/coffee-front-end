import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function HomePage() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
}
