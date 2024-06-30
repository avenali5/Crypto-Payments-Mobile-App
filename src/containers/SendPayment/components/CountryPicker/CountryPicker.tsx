import { Header, PickerOption, Searchbar } from "@/src/common/components";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { styles } from "./CountryPicker.style";
import FlagESP from "@/assets/images/flag_spain.png";
import FlagGUI from "@/assets/images/flag_guinea.png";
import FlagGRE from "@/assets/images/flag_greece.png";
import FlagGBP from "@/assets/images/flag_uk.png";
import FlagGUA from "@/assets/images/flag_guatemala.png";
import FlagGUY from "@/assets/images/flag_guyana.png";
import FlagHNK from "@/assets/images/flag_hong.png";
import FlagHON from "@/assets/images/flag_honduras.png";

type Props = {
  setCountryCode: (code: string) => void;
  setModal: (code: boolean) => void;
  countryCode: string;
};

export function CountryPicker({
  countryCode,
  setCountryCode,
  setModal,
}: Props) {
  const [searchValue, setSearchValue] = useState("");
  const countries = [
    {
      code: "+34",
      country: "España",
      flag: FlagESP,
    },
    {
      code: "+240",
      country: "Equatorial Guinea",
      flag: FlagGUI,
    },
    {
      code: "+30",
      country: "Grecia",
      flag: FlagGRE,
    },
    {
      code: "+500",
      country: "South Gerogia and the South Sandwich Islands",
      flag: FlagGBP,
    },
    {
      code: "+502",
      country: "Guatemala",
      flag: FlagGUA,
    },
    {
      code: "+592",
      country: "Guyana",
      flag: FlagGUY,
    },
    {
      code: "+852",
      country: "Hong Kong",
      flag: FlagHNK,
    },
    {
      code: "+504",
      country: "Honduras",
      flag: FlagHON,
    },
  ];
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    setFilteredCountries(
      countries.filter(
        (country) =>
          country.code.toLowerCase().includes(searchValue.toLowerCase()) ||
          country.country.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  const handleCodeChange = (code: string) => {
    setCountryCode(code);
    setModal(false);
  };

  return (
    <View>
      <Header
        title="Seleccionar país"
        hasBackArrow
        noShadow
        onBackPress={() => setModal(false)}
      />
      <View style={styles.wrapper}>
        <Searchbar
          setSearchText={() => {}}
          inputValue={searchValue}
          onChangeText={setSearchValue}
        />
        {filteredCountries.map((country) => (
          <PickerOption
            flag={country.flag}
            currentSelected={countryCode}
            compareSubtitle
            title={country.code}
            subtitle={country.country}
            handleSelect={handleCodeChange}
          />
        ))}
      </View>
    </View>
  );
}

export default CountryPicker;
