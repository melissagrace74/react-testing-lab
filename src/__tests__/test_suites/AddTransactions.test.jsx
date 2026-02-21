import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AccountContainer from "../../components/AccountContainer";
import { describe, it, expect } from "vitest";

describe("Add Transactions", () => {
  it("adds a new transaction and updates the frontend", async () => {
    render(<AccountContainer />);

    // Wrap actions that trigger state updates in act(...)
    await act(async () => {
      await userEvent.type(
        screen.getByPlaceholderText("Description"),
        "Coffee"
      );
      await userEvent.type(screen.getByPlaceholderText("Category"), "Beverage");
      await userEvent.type(screen.getByPlaceholderText("Amount"), "5");
      await userEvent.type(screen.getByPlaceholderText("Date"), "2026-02-21");

      // Click the submit button (assumes button text is 'Add Transaction')
      await userEvent.click(screen.getByRole("button", { name: /add transaction/i }));
    });

    // Assert the new transaction appears in the list
    expect(screen.getByText("Coffee")).toBeInTheDocument();
    expect(screen.getByText("Beverage")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("2026-02-21")).toBeInTheDocument();
  });
});
