import EStyleSheet from "react-native-extended-stylesheet";
import Constants from "expo-constants";

export const styles = EStyleSheet.create({
  container: {
    padding: 18,
    paddingBottom: 36,
    flex: 1,
    width: "100%",
    marginTop: Constants.statusBarHeight,
  },
});
