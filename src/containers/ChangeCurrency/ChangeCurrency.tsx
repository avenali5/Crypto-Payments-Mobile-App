import { Searchbar } from "@/src/common/components";
import { currencyStore } from "@/src/store";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { styles } from "./ChangeCurrency.style";
import { useRouter } from "expo-router";
import { CurrencyOption } from "./components/CurrencyOption/CurrencyOption";

export function ChangeCurrency() {
  const router = useRouter();
  const { setCurrency, currentCurrency } = currencyStore();
  const [searchValue, setSearchValue] = useState("");
  const currencies = [
    {
      name: "Euro",
      short: "EUR",
      flag: "flag_eur",
    },
    {
      name: "Dólar Estadounidense",
      short: "USD",
      flag: "flag_usd",
    },
    {
      name: "Libra Esterlina",
      short: "GBP",
      flag: "flag_uk",
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
        <CurrencyOption
          key={currency.short}
          currency={currency}
          currentCurrency={currentCurrency}
          handleCurrencyChange={handleCurrencyChange}
        />
      ))}
    </View>
  );
}
