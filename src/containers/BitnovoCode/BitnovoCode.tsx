import React from "react";
import { View } from "react-native";
import { styles } from "./BitnovoCode.style";
import { QRCodeWrapper } from "./components/QRCode/QRCode";

export function BitnovoCode() {
  return (
    <View style={styles.container}>
      <QRCodeWrapper />
    </View>
  );
}
