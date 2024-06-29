import React, { useState } from "react";
import {
  Image,
  Linking,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./LinkOption.style";
import { CustomText } from "@/src/common/components";
// @ts-ignore
import Email from "@/assets/icons/envelope.png";
// @ts-ignore
import qs from "qs";

export function EmailShare() {
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState(false);

  const handlePress = () => {
    setActive(true);
  };

  async function sendEmail(to: string, subject: string, body: string) {
    let url = `mailto:${to}`;

    const query = qs.stringify({
      subject: subject,
      body: body,
    });

    if (query.length) {
      url += `?${query}`;
    }

    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
      throw new Error("Provided URL can not be handled");
    }

    return Linking.openURL(url)
      .then(() => {})
      .catch(() => {});
  }

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <View style={[styles.wrapper, focus && styles.wrapper.focus]}>
        <Image source={Email} style={styles.icon} />
        <View>
          {active ? (
            <View style={styles.actionWrapper}>
              <View style={styles.inputWrapper}>
                <TextInput
                  keyboardType="email-address"
                  placeholder="john.doe@mail.com"
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                  onChangeText={(newEmail) => {
                    setEmail(newEmail);
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.cta}
                disabled={email.length === 0}
                onPress={() => {
                  sendEmail(
                    email,
                    "Solicitud de pago de Bitnovo",
                    `Hola!\n\nTe envío una solicitud de pago de Bitnovo.\nhttps://link.com\n\nSaludos!
                    `
                  );
                }}
              >
                <CustomText style={styles.cta.label}>Enviar</CustomText>
              </TouchableOpacity>
            </View>
          ) : (
            <CustomText style={styles.label}>
              Enviar por correo electrónico
            </CustomText>
          )}
        </View>
      </View>
    </Pressable>
  );
}
