import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    gap: 24,
  },
  instructions: {
    backgroundColor: "$BUTTON_BACKGROUND_COLOR_DISABLED",
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 8,
    borderRadius: 6,
  },
  logo: {
    width: Dimensions.get("window").width - 300,
    height: Dimensions.get("window").width - 300,
    aspectRatio: 1 / 1,
    top: 10,
  },
  codeWrapper: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 12,
  },
  icon: {
    width: 20,
    height: 20,
  },
  label: {
    color: "$TINT_COLOR_PRIMARY",
    fontSize: ".8rem",
  },
  amount: {
    fontSize: "1.8rem",
    fontWeight: 700,
    color: "white",
    textAlign: "center",
  },
  willUpdate: {
    color: "white",
    textAlign: "center",
  },
});
