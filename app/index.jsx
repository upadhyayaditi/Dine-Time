import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const router = useRouter()

  return (
    <View
      // className="bg-red-600"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-purple-400 text-2xl">Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={()=> router.push("/testing")} >
        <Text>
          change route
        </Text>
      </TouchableOpacity>
    </View>
  );
}
