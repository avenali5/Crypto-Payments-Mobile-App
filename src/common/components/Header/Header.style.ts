import EStyleSheet from "react-native-extended-stylesheet";
import Constants from "expo-constants";

export const PADDING = 18;

export const styles = EStyleSheet.create({
  container: {
    padding: PADDING,
    paddingTop: PADDING + Constants.statusBarHeight,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
    backgroundColor: "$BACKGROUND_COLOR",
  },
  withShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "700",
    textAlign: "center",
    color: "$TINT_COLOR_PRIMARY",
    flex: 1,
  },
});
