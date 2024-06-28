import EStyleSheet from "react-native-extended-stylesheet";
import Constants from "expo-constants";

export const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
    backgroundColor: "$BACKGROUND_COLOR",
  },
});
