import React, { useState } from "react";
import { Image, View } from "react-native";
import { styles } from "./SuccessDialog.style";
import { Button, CustomText } from "@/src/common/components";
// @ts-ignore
import Check from "@/assets/icons/success_check.png";
// import { BlurView } from "expo-blur";
// import { BlurView } from "react-native-blur";

type Props = {
  setDialog: (value: boolean) => void;
};

export function SuccessDialog({ setDialog }: Props) {
  return (
    <View style={styles.container}>
      {/* <BlurView
        //   blurTintColor="#ff006780" // has to be hex with opacity
        //   colorTintOpacity={0.2}
        //   blurRadius={10}
        //   style={styles.top}
        //   tint="light"
        //   intensity={40}
        style={styles.blur}
      /> */}
      <View style={styles.card}>
        <Image source={Check} style={styles.img} />
        <CustomText style={styles.title}>Solicitud enviada</CustomText>
        <CustomText style={styles.subtitle}>
          Tu solicitud de pago enviada ha sido enviado con éxito por WhatsApp.
        </CustomText>
        <Button
          text="Entendido"
          type="primary"
          onPress={() => setDialog(false)}
        />
      </View>
    </View>
  );
}
