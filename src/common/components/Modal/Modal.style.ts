import EStyleSheet from "react-native-extended-stylesheet";
import Constants from "expo-constants";

export const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    justifyContent: "space-between",
    backgroundColor: "blue",
    height: "100%",
    width: "100%",
    zIndex: 100,
  },
});
