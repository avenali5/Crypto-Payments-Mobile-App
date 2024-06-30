import React, { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  Linking,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./LinkOption.style";
import { CustomText } from "@/src/common/components";
import Email from "@/assets/icons/envelope.png";
import qs from "qs";
import { currencyStore, dialogStore } from "@/src/store";

type Props = {
  setDialog: (val: boolean) => void;
};

export function EmailShare({ setDialog }: Props) {
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState(false);
  const { setDialogSubtitle } = dialogStore();
  const { paymentURL } = currencyStore();

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
      .then(() => {
        Keyboard.dismiss();
        setEmail("");
        setDialogSubtitle(
          "Tu solicitud de pago ha sido enviada con éxito por email."
        );
        setTimeout(() => {
          setActive(false);
          setDialog(true);
        }, 1000);
      })
      .catch(() => {
        Alert.alert(
          "Error",
          "No puedes abrir la app de email en este dispositivo"
        );
      });
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
                    `Hola!\n\nTe envío una solicitud de pago de Bitnovo.\n${paymentURL}\n\nSaludos!
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
