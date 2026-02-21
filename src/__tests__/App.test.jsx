import { render, screen } from "@testing-library/react";
import AccountContainer from "../components/AccountContainer";
import { describe, it, expect } from "vitest";

describe("App Component", () => {
  it("renders AccountContainer without crashing", () => {
    render(<AccountContainer />);
    expect(screen.getByText("Transactions")).toBeInTheDocument();
  });
});
