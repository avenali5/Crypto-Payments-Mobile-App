import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./LinkOption.style";
import { CustomText } from "@/src/common/components";
// @ts-ignore
import QRCode from "@/assets/icons/scan_barcode.png";
// @ts-ignore
import PayBitnovo from "@/assets/icons/pay_bitnovo.png";
import { useRouter } from "expo-router";

export function BitnovoShare() {
  const router = useRouter();

  const handleQRCode = () => {
    router.push("/bitnovo-code");
  };

  return (
    <Pressable style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={PayBitnovo} style={styles.icon} />
        <View>
          <CustomText style={styles.label}>pay.bitnovo.com/59f9g9</CustomText>
        </View>
      </View>

      <TouchableOpacity style={styles.qrButton} onPress={handleQRCode}>
        <Image source={QRCode} style={styles.icon} />
      </TouchableOpacity>
    </Pressable>
  );
}
