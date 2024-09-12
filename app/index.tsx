import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShopingListItem";
import { Link } from "expo-router";

export default function App() {
  
  return (
    <View style={styles.container}>
      {/* <Link href="/counter" style={{ textAlign: "center", marginBottom: 18, fontSize: 24 }}>Go to counter</Link> */}
      <ShoppingListItem name="Cofee" />
      <ShoppingListItem name="Tea" isCompleted={true} />
      <ShoppingListItem name="Sugar" isCompleted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  
  
});
