import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="bg-red-600"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-purple-400 text-2xl">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
