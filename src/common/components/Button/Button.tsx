import React from "react";
import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { CustomText } from "..";
import { styles } from "./Button.style";

type Props = {
  text: string;
  type: "primary" | "secondary";
  disabled?: boolean;
  onPress: () => void;
  icon?: ImageSourcePropType;
};

export function Button({ text, disabled, type, onPress, icon }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, styles.type[type], disabled && styles.disabled]}
      disabled={disabled}
    >
      <CustomText
        style={[
          styles.text,
          styles.text[type],
          disabled && styles.disabled.text,
        ]}
      >
        {text}
      </CustomText>
      {icon && <Image source={icon} style={styles.icon} />}
    </TouchableOpacity>
  );
}
