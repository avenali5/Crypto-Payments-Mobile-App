import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  wrapper: {
    flex: 0,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    paddingRight: 3,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "$LITTLE_BUTTON_BACKGROUND",
    borderRadius: 20,
    alignItems: "center",
  },
});
