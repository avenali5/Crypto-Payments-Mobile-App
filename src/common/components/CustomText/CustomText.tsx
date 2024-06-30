import { StyleSheet, Text, TextProps } from "react-native";

export function CustomText(props: TextProps & { isBold?: boolean }) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        { fontFamily: props.isBold ? "Mulish-Bold" : "Mulish-Regular" },
      ]}
    />
  );
}
