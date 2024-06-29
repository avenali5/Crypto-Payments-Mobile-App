import React, { useState } from "react";
import { Image, Pressable, View } from "react-native";
import { styles } from "./SuccessDialog.style";
import { Button, CustomText } from "@/src/common/components";
import Check from "@/assets/icons/success_check.png";
import { dialogStore } from "@/src/store";
// import { BlurView } from "expo-blur";
// import { BlurView } from "react-native-blur";

type Props = {
  setDialog: (value: boolean) => void;
};

export function SuccessDialog({ setDialog }: Props) {
  const { dialogSubtitle } = dialogStore();

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
      <Pressable style={styles.background} onPress={() => setDialog(false)} />
      <View style={styles.card}>
        <Image source={Check} style={styles.img} />
        <CustomText style={styles.title}>Solicitud enviada</CustomText>
        <CustomText style={styles.subtitle}>{dialogSubtitle}</CustomText>
        <Button
          text="Entendido"
          type="primary"
          onPress={() => setDialog(false)}
        />
      </View>
    </View>
  );
}
