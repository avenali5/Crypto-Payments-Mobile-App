import EStyleSheet from "react-native-extended-stylesheet";
import Constants from "expo-constants";

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
});
