import { StyleSheet, Text, TextProps } from "react-native";

export function CustomText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "Mulish-Regular" }]} />
  );
}
