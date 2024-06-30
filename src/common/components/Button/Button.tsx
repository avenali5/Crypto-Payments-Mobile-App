import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import { CustomText } from "..";
import { styles } from "./Button.style";
import Loading from "@/assets/icons/spinner.png";
// import Animated from "react-native-reanimated";

type Props = {
  text: string;
  type: "primary" | "secondary";
  disabled?: boolean;
  onPress: () => void;
  icon?: ImageSourcePropType;
  loading?: boolean;
};

export function Button({
  text,
  disabled,
  type,
  onPress,
  icon,
  loading,
}: Props) {
  const rotationDegree = useRef(new Animated.Value(0)).current;
  const startRotationAnimation = (
    durationMs: number,
    rotationDegree: Animated.Value
  ): void => {
    Animated.loop(
      Animated.timing(rotationDegree, {
        toValue: 360,
        duration: durationMs,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };
  useEffect(() => {
    startRotationAnimation(1000, rotationDegree);
  }, [1000, rotationDegree]);

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        styles.type[type],
        loading && styles.loading,
        disabled && !loading && styles.disabled,
      ]}
      disabled={disabled}
    >
      {loading ? (
        <Animated.Image
          source={Loading}
          style={{
            width: 20,
            height: 20,
            transform: [
              {
                rotateZ: rotationDegree.interpolate({
                  inputRange: [0, 360],
                  outputRange: ["0deg", "360deg"],
                }),
              },
            ],
          }}
        />
      ) : (
        <CustomText
          style={[
            styles.text,
            styles.text[type],
            disabled && styles.disabled.text,
          ]}
        >
          {text}
        </CustomText>
      )}

      {icon && <Image source={icon} style={styles.icon} />}
    </Pressable>
  );
}
