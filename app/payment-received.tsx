import { PaymentReceived } from "@/src/containers";
import React from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default function PaymentReceivedContainer() {
  return (
    <View style={styles.container}>
      <PaymentReceived />
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
