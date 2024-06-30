import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: "#F9FAFC",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 10,
    marginBottom: 20,
    width: "100%",
  },
  topWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  textWrapper: {
    title: {
      fontSize: ".9rem",
      color: "$TINT_COLOR_SECONDARY",
    },
    amount: {
      fontSize: "1.8rem",
      fontWeight: "700",
      color: "$TINT_COLOR_PRIMARY",
    },
  },
  bottomWrapper: {
    text: {
      color: "$TINT_COLOR_SECONDARY",
      fontSize: ".8rem",
    },
  },
  icon: {
    width: 58,
    height: 58,
  },
});
