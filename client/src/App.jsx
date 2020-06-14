import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./ApolloClient";
import UserContextProvider from "components/UserContextProvider";
import Routes from "Routes";
import WordLink from "components-shared/WordLink";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
      <WordLink
        letterInput="Landing Pagx"
        word="Landing Page"
        link="/dummyLink"
      />
    </ApolloProvider>
  );
};

export default App;
