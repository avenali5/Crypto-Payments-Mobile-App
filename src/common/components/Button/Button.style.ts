import EStyleSheet from "react-native-extended-stylesheet";
import Constants from "expo-constants";

export const PADDING = 16;

export const styles = EStyleSheet.create({
  button: {
    padding: 18,
    borderRadius: 6,
    width: "100%",
  },
  disabled: {
    backgroundColor: "$BUTTON_BACKGROUND_COLOR_DISABLED",
    text: {
      color: "$BUTTON_TEXT_COLOR_DISABLED",
    },
  },
  type: {
    primary: {
      backgroundColor: "$BUTTON_BACKGROUND_COLOR",
    },
    secondary: {
      backgroundColor: "$SECONDARY_BUTTON_BACKGROUND_DISABLED",
    },
  },
  text: {
    fontSize: "1rem",
    fontWeight: "600",
    textAlign: "center",
    primary: {
      color: "#FFF",
    },
    secondary: {
      color: "$BUTTON_BACKGROUND_COLOR",
    },
  },
});
