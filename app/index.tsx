import { CreatePayment } from "@/src/containers";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build();

export default function Home() {
  return (
    <View style={styles.container}>
      <CreatePayment />
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
