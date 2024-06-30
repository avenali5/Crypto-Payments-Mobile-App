import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  text: {
    fontSize: 40,
    color: "$BUTTON_BACKGROUND_COLOR",
  },
  textInactive: {
    color: "$INACTIVE_TEXT_COLOR",
  },
  sign: {},
  input: {
    width: "100%",
    textAlign: "center",
    transform: [{ scale: 1 }],
  },
  pressing: {
    transform: [{ scale: 1.1 }],
  },
});
