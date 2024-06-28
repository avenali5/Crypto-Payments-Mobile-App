import React from "react";
import { TouchableOpacity } from "react-native";
import { CustomText } from "..";
import { styles } from "./Button.style";

type Props = {
  text: string;
  type: "primary" | "secondary";
  disabled?: boolean;
  onPress: () => void;
};

export function Button({ text, disabled, type, onPress }: Props) {
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
    </TouchableOpacity>
  );
}
