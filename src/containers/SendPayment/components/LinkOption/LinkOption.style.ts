import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: 16,
    marginBottom: 16,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#D3DCE6",
    borderRadius: 6,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    focus: {
      borderColor: "$BUTTON_BACKGROUND_COLOR",
    },
  },
  label: {
    color: "$TINT_COLOR_PRIMARY",
  },
  qrButton: {
    backgroundColor: "$BUTTON_BACKGROUND_COLOR",
    height: 55,
    aspectRatio: 1 / 1,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
  actionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "86%",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
  prefixPicker: {
    flexDirection: "row",
    alignItems: "center",
  },
  cta: {
    backgroundColor: "$BUTTON_BACKGROUND_COLOR",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    label: {
      color: "#FFF",
    },
    disabled: {
      opacity: 0.5,
    },
  },
});
