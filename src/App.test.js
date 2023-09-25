import React from "react";
import { screen, render } from "@testing-library/react";
import { useRoute } from "react-router5";
import App from "./App";

// Mockear la función useRoute
jest.mock("react-router5", () => ({
  useRoute: jest.fn(),
  Link: jest.fn(),
}));

describe("App component", () => {
  it("should render Inbox when route is 'inbox'", () => {
    // Configurar el valor de ruta simulado
    useRoute.mockReturnValue({ route: { name: "inbox" } });

    render(<App />);

    expect(screen.getByText("Inbox")).toBeInTheDocument();
  });

  it("should render Contacts when route is 'contacts'", () => {
    // Configurar el valor de ruta simulado
    useRoute.mockReturnValue({ route: { name: "contacts" } });

    render(<App />);

    expect(screen.getByText("Contacts")).toBeInTheDocument();
  });

  it("should render Message when route is 'inbox.message'", () => {
    // Configurar el valor de ruta simulado
    useRoute.mockReturnValue({ route: { name: "inbox.message" } });

    render(<App />);

    expect(screen.getByText("Message")).toBeInTheDocument();
  });

  it("should render Compose when route is 'compose'", () => {
    // Configurar el valor de ruta simulado
    useRoute.mockReturnValue({ route: { name: "compose" } });

    render(<App />);

    expect(screen.getByText("Compose")).toBeInTheDocument();
  });
});
