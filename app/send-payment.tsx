import { SendPayment } from "@/src/containers";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default function ChangeCurrencyContainer() {
  return (
    <View style={styles.container}>
      <SendPayment />
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$BACKGROUND_COLOR",
  },
});
