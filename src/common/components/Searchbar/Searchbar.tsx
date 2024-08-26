import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./Searchbar.style";

export type Props = {
  onChangeText: (text: string) => void;
  setSearchText: (text: string) => void;
  inputFocusCallback?: () => void;
  inputValue: string;
};

export function Searchbar({
  onChangeText,
  inputValue,
  inputFocusCallback,
  setSearchText,
}: Props) {
  const [inputType, setInputType] = useState<string>("default");

  const handlChange = (e: string) => {
    onChangeText(e);
  };

  return (
    <View style={[styles.container, styles.type[inputType]]}>
      <View style={styles.iconContainer}>
        <AntDesign
          name="search1"
          size={24}
          color={inputType === "default" ? "#647184" : "#035AC5"}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={inputValue}
          placeholder="Search"
          placeholderTextColor="#9F9F9F"
          style={styles.textInput}
          onChangeText={handlChange}
          onFocus={() => {
            if (inputFocusCallback) {
              inputFocusCallback();
            }
            setInputType("focus");
          }}
          onBlur={() => {
            if (inputFocusCallback) {
              inputFocusCallback();
            }
            setInputType("default");
          }}
        />
      </View>
    </View>
  );
}
