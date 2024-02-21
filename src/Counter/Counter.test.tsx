import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Counter } from "./Counter";

describe("Unit::Counter", () => {
  beforeEach(() => render(<Counter />));
  it("should increment counter", async () => {
    const addElement = screen.getByText("+");
    const counterElement = screen.getByTestId("counter");

    await userEvent.click(addElement);
    expect(counterElement.textContent).toBe("1");
  });

  it("should decrement counter", async () => {
    const subElement = screen.getByText("-");
    const counterElement = screen.getByTestId("counter");

    await userEvent.click(subElement);
    expect(counterElement.textContent).toBe("0");
  });

  it("should increment counter up to 3", async () => {
    const addElement = screen.getByText("+");
    const counterElement = screen.getByTestId("counter");

    await userEvent.click(addElement);
    await userEvent.click(addElement);
    await userEvent.click(addElement);
    expect(counterElement.textContent).toBe("3");
  });

  it("should decrement counter at number exemple", async () => {
    const addElement = screen.getByText("+");
    const subElement = screen.getByText("-");
    const counterElement = screen.getByTestId("counter");

    await userEvent.click(addElement);
    await userEvent.click(addElement);
    await userEvent.click(addElement);
    await userEvent.click(subElement);
    expect(counterElement.textContent).toBe("2");
  });

  it("should reset counter", async () => {
    const resetElement = screen.getByText("reset");
    const counterElement = screen.getByTestId("counter");

    await userEvent.click(resetElement);
    expect(counterElement.textContent).toBe("0");
  });
});
