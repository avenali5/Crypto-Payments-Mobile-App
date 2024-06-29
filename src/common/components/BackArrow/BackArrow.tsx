import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./BackArrow.style";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
  onBackPress?: () => void;
};

export function BackArrow({ onBackPress }: Props) {
  const router = useRouter();

  const handlePress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <View>
        <View style={styles.wrapper}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
