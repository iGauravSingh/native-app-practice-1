import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { theme } from "./theme";
import { ShoppingListItem } from "./components/ShopingListItem";

export default function App() {
  
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Cofee" />
      <ShoppingListItem name="Tea" />
      <ShoppingListItem name="Sugar" />
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
