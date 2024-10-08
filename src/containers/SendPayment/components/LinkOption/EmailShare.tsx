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
    let url = `mailto:${to}?subject=${subject}&body=${body}`;

    console.log(to, subject, body);

    Linking.openURL(url)
      .then(() => {
        Keyboard.dismiss();
        setEmail("");
        setDialogSubtitle(
          "Your payment request has been sent successfully"
        );
        setTimeout(() => {
          setActive(false);
          setDialog(true);
        }, 1000);
      })
      .catch(() => {
        Alert.alert(
          "Error",
          "You can't open the email app on this device."
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
                  style={{ fontFamily: "Mulish-Regular", width: "80%" }}
                />
              </View>
              <TouchableOpacity
                style={[styles.cta, email.length === 0 && styles.cta.disabled]}
                disabled={email.length === 0}
                onPress={() => {
                  sendEmail(
                    email,
                    "Bitnovo Payment Request",
                    `Hi!\n\nHere's a Bitnovo payment request.\n${paymentURL}\n\nGreetings!
                    `
                  );
                }}
              >
                <CustomText style={styles.cta.label}>Enviar</CustomText>
              </TouchableOpacity>
            </View>
          ) : (
            <CustomText style={styles.label}>
              Send via email
            </CustomText>
          )}
        </View>
      </View>
    </Pressable>
  );
}
