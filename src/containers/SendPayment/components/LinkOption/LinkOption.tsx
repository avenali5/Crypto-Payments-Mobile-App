import React, { useEffect, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./LinkOption.style";
import { CustomText } from "@/src/common/components";
import QRCode from "@/assets/icons/scan_barcode.png";

type Props = {
  label: string;
  hasQR?: boolean;
  onPress: () => void;
  icon: ImageSourcePropType;
  type: string;
};

export function LinkOption({ label, hasQR, onPress, icon, type }: Props) {
  const [isSelected, setIsSelected] = useState("");

  const handlePress = () => {
    if (type === "bitnovo") {
    } else if (type === "email") {
      setIsSelected("email");
    } else if (type === "wsp") {
      setIsSelected("wsp");
    } else if (type === "share") {
    }
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <View style={styles.wrapper}>
        <Image source={icon} style={styles.icon} />
        <View>
          <CustomText style={styles.label}>{label}</CustomText>
        </View>
      </View>
      {hasQR && (
        <TouchableOpacity style={styles.qrButton}>
          <Image source={QRCode} style={styles.icon} />
        </TouchableOpacity>
      )}
    </Pressable>
  );
}
