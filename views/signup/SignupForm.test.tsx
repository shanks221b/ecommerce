import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignupForm from "./SignupForm";

describe("SignupForm", () => {
  it("renders the signup form", () => {
    render(<SignupForm />);

    expect(
      screen.getByRole("heading", { name: /sign up/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();
  });

  it("shows validation errors when submitted empty", async () => {
    const user = userEvent.setup();

    render(<SignupForm />);

    await user.click(
      screen.getByRole("button", { name: /sign up/i })
    );

    expect(
      await screen.findByText("First name is required")
    ).toBeInTheDocument();

    expect(
      await screen.findByText("Last name is required")
    ).toBeInTheDocument();

    expect(
      await screen.findByText("Email is required")
    ).toBeInTheDocument();

    expect(
      await screen.findByText("Minimum 6 characters")
    ).toBeInTheDocument();
  });

  it("submits valid signup data", async () => {
    const user = userEvent.setup();

    const consoleSpy = jest
      .spyOn(console, "log")
      .mockImplementation();

    render(<SignupForm />);

    await user.type(
      screen.getByLabelText(/first name/i),
      "John"
    );

    await user.type(
      screen.getByLabelText(/last name/i),
      "Doe"
    );

    await user.type(
      screen.getByLabelText(/email/i),
      "john@gmail.com"
    );

    await user.type(
      screen.getByLabelText(/password/i),
      "password123"
    );

    await user.click(
      screen.getByRole("button", { name: /sign up/i })
    );

    expect(consoleSpy).toHaveBeenCalledWith({
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      password: "password123",
    });

    consoleSpy.mockRestore();
  });
});