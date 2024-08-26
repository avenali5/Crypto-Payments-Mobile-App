import React from "react";
import { Image, Platform, View } from "react-native";
import { styles } from "./SuccessDialog.style";
import { CustomText } from "@/src/common/components";
import Check from "@/assets/icons/success_check.png";
import { dialogStore } from "@/src/store";
import { BlurView } from "expo-blur";
import { Button } from "@/src/common/components/Button/Button";

type Props = {
  setDialog: (value: boolean) => void;
};

export function SuccessDialog({ setDialog }: Props) {
  const { dialogSubtitle } = dialogStore();

  return (
    <View style={styles.container}>
      <BlurView
        intensity={Platform.OS === "ios" ? 20 : 80}
        style={styles.background}
        experimentalBlurMethod="dimezisBlurView"
        blurReductionFactor={80}
      />
      <View style={styles.card}>
        <Image source={Check} style={styles.img} />
        <CustomText style={styles.title}>Request sent</CustomText>
        <CustomText style={styles.subtitle}>{dialogSubtitle}</CustomText>
        <Button
          text="Understood"
          type="primary"
          onPress={() => setDialog(false)}
        />
      </View>
    </View>
  );
}
