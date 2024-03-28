import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Counter } from "./Counter";

describe("Unit::Counter", () => {
  beforeEach(() => render(<Counter />));
  it("should render initial counter value as 0", () => {
    expect(screen.getByTestId("counter").textContent).toBe("0");
  });

  it("should increment the counter when the + button is clicked", async () => {
    const addElement = screen.getByText("+");

    await userEvent.click(addElement);
    expect(screen.getByTestId("counter").textContent).toBe("1");
  });

  it("should decrement counter when the - button is clicked", async () => {
    const subElement = screen.getByText("-");

    await userEvent.click(subElement);
    expect(screen.getByTestId("counter").textContent).toBe("0");
  });

  it("should not decrement the counter below 0", async () => {
    const subElement = screen.getByText("-");

    await userEvent.click(subElement);
    expect(screen.getByTestId("counter").textContent).toBe("0");
  });

  it("should reset the counter to 0 when the reset button is clicked", async () => {
    const resetElement = screen.getByText("reset");

    await userEvent.click(resetElement);
    expect(screen.getByTestId("counter").textContent).toBe("0");
  });

  it("should decrement the counter when the - button is clicked and counter is greater than 0", async () => {
    const subElement = screen.getByText("-");

    await userEvent.click(screen.getByText("+"));

    await userEvent.click(subElement);
    expect(screen.getByTestId("counter").textContent).toBe("0");
  });
});
