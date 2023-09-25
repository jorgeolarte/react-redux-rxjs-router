import React from "react";
import { Link } from "react-router5";

export default function Navbar() {
  return (
    <nav>
      <Link routeName="inbox">Inbox</Link>
      <Link routeName="contacts">Contacts</Link>
      <Link routeName="compose">Compose</Link>
      <Link routeName="inbox.message" routeParams={{ id: 1 }}>
        Message 1
      </Link>
    </nav>
  );
}
