import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    // padding: 18,
  },
  instructions: {
    backgroundColor: "$BUTTON_BACKGROUND_COLOR_DISABLED",
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 8,
    borderRadius: 6,
  },
  icon: {
    width: 20,
    height: 20,
  },
  label: {
    color: "$TINT_COLOR_PRIMARY",
    fontSize: ".8rem",
  },
  willUpdate: {
    color: "white",
    textAlign: "center",
  },
});
