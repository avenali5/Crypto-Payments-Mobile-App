import React from "react";
import { View } from "react-native";
import { styles } from "./Options.style";
// @ts-ignore
import { LinkOption } from "../LinkOption/LinkOption";
import Email from "@/assets/icons/envelope.png";
import PayBitnovo from "@/assets/icons/pay_bitnovo.png";
import WSP from "@/assets/icons/whatsapp.png";
import Share from "@/assets/icons/share.png";

export function Options() {
  const linkOptions = [
    {
      label: "pay.bitnovo.com/59f9g9",
      icon: PayBitnovo,
      hasQR: true,
      type: "bitnovo",
    },
    {
      label: "Enviar por correo electrónico",
      icon: Email,
      type: "email",
    },
    {
      label: "Enviar a número de Whatsapp",
      icon: WSP,
      type: "wsp",
    },
    {
      label: "Compartir con otras aplicaciones",
      icon: Share,
      type: "share",
    },
  ];

  return (
    <View style={styles.container}>
      {linkOptions.map((option, index) => (
        <LinkOption
          label={option.label}
          icon={option.icon}
          onPress={() => {}}
          hasQR={option.hasQR}
          key={option.label}
          type={option.type}
        />
      ))}
    </View>
  );
}
