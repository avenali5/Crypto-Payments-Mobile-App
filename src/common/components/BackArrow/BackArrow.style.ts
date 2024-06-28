import EStyleSheet from "react-native-extended-stylesheet";
import Constants from "expo-constants";

export const PADDING = 16;

export const styles = EStyleSheet.create({
  button: {
    width: 66,
  },
  link: {
    width: 66,
  },
  wrapper: {
    backgroundColor: "$LITTLE_BUTTON_BACKGROUND",
    padding: 3,
    borderRadius: 200,
  },
});
