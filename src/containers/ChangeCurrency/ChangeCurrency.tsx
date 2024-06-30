import { Searchbar } from "@/src/common/components";
import { currencyStore } from "@/src/store";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { styles } from "./ChangeCurrency.style";
import { useRouter } from "expo-router";
import FlagEUR from "@/assets/images/flag_eur.png";
import FlagUSA from "@/assets/images/flag_usa.png";
import FlagGBP from "@/assets/images/flag_uk.png";
import { PickerOption } from "@/src/common/components/PickerOption/PickerOption";

export function ChangeCurrency() {
  const router = useRouter();
  const { setCurrency, currentCurrency } = currencyStore();
  const [searchValue, setSearchValue] = useState("");
  const currencies = [
    {
      name: "Euro",
      short: "EUR",
      flag: FlagEUR,
    },
    {
      name: "Dólar Estadounidense",
      short: "USD",
      flag: FlagUSA,
    },
    {
      name: "Libra Esterlina",
      short: "GBP",
      flag: FlagGBP,
    },
  ];
  const [filteredCurrencies, setFilteredCurrencies] = useState(currencies);

  useEffect(() => {
    setFilteredCurrencies(
      currencies.filter(
        (currency) =>
          currency.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          currency.short.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  const handleCurrencyChange = (curr: string) => {
    setCurrency(curr);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Searchbar
        setSearchText={() => {}}
        inputValue={searchValue}
        onChangeText={setSearchValue}
      />
      {filteredCurrencies.map((currency) => (
        <PickerOption
          title={currency.name}
          subtitle={currency.short}
          flag={currency.flag}
          handleSelect={handleCurrencyChange}
          currentSelected={currentCurrency}
        />
      ))}
    </View>
  );
}
