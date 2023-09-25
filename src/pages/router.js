import React from "react";
import { useRoute } from "react-router5";
import { Inbox, Compose, Contacts, Message, NotFound } from "./index";

function Router() {
  const { route } = useRoute();

  if (route.name === "inbox") {
    return <Inbox />;
  }

  if (route.name === "contacts") {
    return <Contacts />;
  }

  if (route.name === "inbox.message") {
    return <Message />;
  }

  if (route.name === "compose") {
    return <Compose />;
  }

  return <NotFound />;
}

export default Router;
