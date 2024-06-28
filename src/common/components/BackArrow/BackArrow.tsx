import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./BackArrow.style";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
  link?: string;
};

export function BackArrow({ link }: Props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Link href={link ?? "/"} style={styles.link}>
        <View style={styles.wrapper}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </View>
      </Link>
    </TouchableOpacity>
  );
}
