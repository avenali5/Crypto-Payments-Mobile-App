import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  card: {
    backgroundColor: "$SECONDARY_BUTTON_BACKGROUND_DISABLED",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 16,
    marginBottom: 30,
  },
  check: {
    width: 90,
    height: 90,
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "$TINT_COLOR_PRIMARY",
    marginVertical: 20,
  },
  idWrapper: {
    borderRadius: 200,
    backgroundColor: "#166AD330",
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  idText: {
    color: "$BUTTON_BACKGROUND_COLOR",
    fontWeight: "bold",
  },
  dataItem: {
    flexDirection: "row",
    alignItems: "first-baseline",
    marginBottom: 20,
    justifyContent: "space-between",
    gap: 10,
  },
  icon: {
    width: 30,
    height: 30,
    top: -3,
  },
  label: {
    fontSize: "1rem",
    color: "$TINT_COLOR_SECONDARY",
    flex: 1,
  },
  value: {
    fontSize: "1rem",
    color: "$TINT_COLOR_PRIMARY",
    fontWeight: "bold",
    textAlign: "right",
    maxWidth: "60%",
  },
});
