import * as React from "react";
import { Searchbar } from "react-native-paper";

const SearchBar = ({ handleSearchQuery, searchQuery }) => {
  return (
    <Searchbar
      placeholder="Search Location ....."
      onChangeText={handleSearchQuery}
      value={searchQuery}
    />
  );
};

export default SearchBar;
