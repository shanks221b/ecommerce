import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("renders the login form", () => {
    render(<LoginForm />);

    expect(
      screen.getByRole("heading", { name: /login/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /login/i })
    ).toBeInTheDocument();
  });

  it("shows validation errors when submitted empty", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.click(
      screen.getByRole("button", { name: /login/i })
    );

    expect(
      await screen.findByText("Email is required")
    ).toBeInTheDocument();

    expect(
      await screen.findByText("Password must be at least 6 characters")
    ).toBeInTheDocument();
  });

  it("submits valid login data", async () => {
    const user = userEvent.setup();

    const consoleSpy = jest
      .spyOn(console, "log")
      .mockImplementation();

    render(<LoginForm />);

    await user.type(
      screen.getByLabelText(/email/i),
      "test@gmail.com"
    );

    await user.type(
      screen.getByLabelText(/password/i),
      "password123"
    );

    await user.click(
      screen.getByRole("button", { name: /login/i })
    );

    expect(consoleSpy).toHaveBeenCalledWith({
      email: "test@gmail.com",
      password: "password123",
    });

    consoleSpy.mockRestore();
  });
});