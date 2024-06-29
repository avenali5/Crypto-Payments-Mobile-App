import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    // height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    height: "100%",

    position: "absolute",
    // top: -130,
    top: 0,
    left: 0,
    backgroundColor: "blue",
    justifyContent: "flex-end",
    padding: 18,
    paddingBottom: 36,
  },
  blur: {
    height: "100%",
    width: "100%",
    // position: "absolute",
    top: -300,
    backgroundColor: "blue",
    opacity: 0.5,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 80,
    height: 80,
    marginBottom: 18,
  },
  title: {
    fontSize: "1.7rem",
    color: "$TINT_COLOR_PRIMARY",
    textAlign: "center",
  },
  subtitle: {
    fontSize: ".9rem",
    color: "$TINT_COLOR_SECONDARY",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 24,
  },
});
