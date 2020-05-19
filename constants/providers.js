import * as React from "react";
import Apollo from "./apollo";
import { UserContext } from "./user-context";
import { Routes } from "../navigation/routes";

export const Providers = () => {
  return (
    <Apollo>
      <UserContext>
        <Routes />
      </UserContext>
    </Apollo>
  );
};
