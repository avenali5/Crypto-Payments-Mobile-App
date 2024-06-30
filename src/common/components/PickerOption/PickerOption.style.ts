import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  currencyOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    gap: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  currName: {
    fontSize: ".9rem",
    color: "$TINT_COLOR_PRIMARY",
  },
  currShort: {
    fontSize: ".8rem",
    color: "$TINT_COLOR_SECONDARY",
  },
  focus: {
    backgroundColor: "$LITTLE_BUTTON_BACKGROUND",
  },
  textWrapper: {
    flex: 2,
  },
  flag: {
    width: 32,
    height: 32,
  },
});
