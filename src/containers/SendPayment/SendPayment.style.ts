import EStyleSheet from "react-native-extended-stylesheet";
import Constants from "expo-constants";

export const styles = EStyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderColor: "#00000030",
    padding: 18,
    width: "100%",
    flex: 1,
    paddingBottom: 28,
  },
});
