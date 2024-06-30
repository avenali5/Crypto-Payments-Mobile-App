import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    paddingVertical: 18,
    gap: 4,
    width: "100%",
    flex: 2,
  },
  title: {
    color: "$TINT_COLOR_PRIMARY",
  },
  input: {
    padding: 18,
    width: "100%",
    borderWidth: 1,
    borderColor: "$INPUT_BORDER_COLOR",
    borderRadius: 6,
    fontFamily: "Mulish-Regular",
  },
  focus: {
    borderColor: "$INPUT_FOCUS_BORDER_COLOR",
  },
  characters: {
    flexDirection: "row",
    justifyContent: "flex-end",
    text: {
      color: "$TINT_COLOR_SECONDARY",
    },
  },
});
