import * as React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetAllLocations {
    allLocations {
      data {
        _id
        location
      }
    }
  }
`;

export function useAllLocations() {
  const { loading, error, data: locationData } = useQuery(GET_LOCATIONS);

  return { loading, error, locationData };
}

const GET_USER_BY_ID = gql`
  query findUserByID($id: String!) {
    name
    location
    phone
    items
  }
`;

export function useFindUserById(id) {
  const { loading, error, data: userData } = useQuery(GET_USER_BY_ID, {
    variables: { id },
  });

  return { loading, error, userData };
}
