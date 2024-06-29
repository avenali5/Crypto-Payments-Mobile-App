import React, { useState } from "react";
import { Image, View } from "react-native";
import { styles } from "./QRCode.style";
import { CustomText } from "@/src/common/components";
import Exclamation from "@/assets/icons/instructions.png";
export function QRCode() {
  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Image source={Exclamation} style={styles.icon} />
        <CustomText style={styles.label}>
          Escanea el QR y serás redirigido a la pasarela de pago de Bitnovo Pay.
        </CustomText>
      </View>
      <CustomText>codigo</CustomText>
      <CustomText style={styles.willUpdate}>
        Esta pantalla se actualizará automáticamente.
      </CustomText>
    </View>
  );
}
