import React, { useState } from "react";
import { Image, Platform, Pressable, View } from "react-native";
import { styles } from "./SuccessDialog.style";
import { Button, CustomText } from "@/src/common/components";
import Check from "@/assets/icons/success_check.png";
import { dialogStore } from "@/src/store";
import { BlurView } from "expo-blur";

type Props = {
  setDialog: (value: boolean) => void;
};

export function SuccessDialog({ setDialog }: Props) {
  const { dialogSubtitle } = dialogStore();

  return (
    <View style={styles.container}>
      <BlurView
        // tint="systemChromeMaterialDark"
        intensity={Platform.OS === "ios" ? 20 : 80}
        style={styles.background}
        experimentalBlurMethod="dimezisBlurView"
        blurReductionFactor={80}
      />
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
