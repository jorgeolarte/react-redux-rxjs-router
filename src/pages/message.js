import React from "react";
import { useRoute } from "react-router5";

export default function Message() {
  const { route } = useRoute();

  return <div>Message {JSON.stringify(route.params)}</div>;
}
