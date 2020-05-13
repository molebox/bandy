import * as React from "react";

export const useSearchBar = (data) => {
  const allItems = data.allItems.data;
  const emptyQuery = "";
  const [searchQuery, setSearchQuery] = React.useState({
    filteredData: [],
    query: emptyQuery,
  });

  const handleSearchQuery = (query) => {
    const items = data.allItems.data || [];

    const filteredData = items.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });

    setSearchQuery({ filteredData, query });
  };

  const { filteredData, query } = searchQuery;
  const hasSearchResult = filteredData && query !== emptyQuery;
  const items = hasSearchResult ? filteredData : allItems;

  return { items, handleSearchQuery, searchQuery };
};
