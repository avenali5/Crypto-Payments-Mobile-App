import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,

    justifyContent: "flex-end",
    padding: 18,
    paddingBottom: 36,
  },
  background: {
    height: Dimensions.get("window").height + 130,
    width: Dimensions.get("window").width,
    position: "absolute",
    backgroundColor: "#00285940",
    left: 0,
    top: 0,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
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
