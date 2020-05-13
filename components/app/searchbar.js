import * as React from "react";
import { Searchbar } from "react-native-paper";
import { useTheme } from "react-native-paper";

const SearchBar = ({ handleSearchQuery, searchQuery }) => {
  const { colors } = useTheme();
  return (
    <Searchbar
      placeholder="Vad vill du söka efter?"
      iconColor={colors.background}
      inputStyle={{ color: colors.background }}
      onChangeText={handleSearchQuery}
      value={searchQuery}
    />
  );
};

export default SearchBar;
