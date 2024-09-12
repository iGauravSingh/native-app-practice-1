import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { theme } from "../theme";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  name: string;
  isCompleted?: boolean;
};

export function ShoppingListItem({ name, isCompleted }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want delete ${name}`,
      "It will be gone for good.",
      [
        {
          text: "Yes",
          onPress: () => console.log("Ok Deleting"),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };
  return (
    <View>
      {/* <Pressable onPress={() => console.log("pressed!")}>
        <Text>Delete</Text>
      </Pressable> */}

      <View style={[styles.itemContainer, isCompleted ? styles.completedContainer : undefined]}>
        <Text style={[styles.itemText, isCompleted ? styles.completedText : undefined]}>{name}</Text>
        <TouchableOpacity
          // style={[styles.button, isCompleted ? styles.completedButon : undefined]}
          onPress={handleDelete}
          activeOpacity={0.8}
        >
          {/* <Text style={[styles.buttonText]}>Delete</Text> */}
          <AntDesign name="closecircle" size={24} color={isCompleted ? theme.colorGrey :theme.colorRed} />
        </TouchableOpacity>
      </View>
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
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
  // button: {
  //   backgroundColor: theme.colorBlack,
  //   padding: 8,
  //   borderRadius: 6,
  // },
  // buttonText: {
  //   color: theme.colorWhite,
  //   fontWeight: "bold",
  //   textTransform: "uppercase",
  //   letterSpacing: 1,
  // },
  // completedButon: {
  //   backgroundColor: theme.colorGrey,
  // },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
    color: theme.colorGrey,
  }
});
