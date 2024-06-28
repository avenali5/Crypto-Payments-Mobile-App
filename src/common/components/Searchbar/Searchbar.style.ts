import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    gap: 8,
    backgroundColor: "$BACKGROUND_COLOR",
    borderRadius: 6,
    marginBottom: 16,
  },
  textInput: {
    fontSize: "1rem",
    width: "100%",
    flex: 1,
    fontFamily: "mulish-regular",
  },
  type: {
    default: {
      borderWidth: 1,
      borderColor: "$INPUT_BORDER_COLOR",
    },
    focus: {
      borderWidth: 1,
      borderColor: "$INPUT_FOCUS_BORDER_COLOR",
    },
  },
});
