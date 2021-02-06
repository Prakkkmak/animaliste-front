import { render, screen, waitFor } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import Login from "@/components/user/Login.vue";
import store from "@/store";

beforeEach(() => {
  render(Login, {
    global: {
      plugins: [store],
    }
  });
});

test("fields exist", () => {
  expect(screen.queryByPlaceholderText("user.mail")).toBeTruthy();
  expect(screen.queryByPlaceholderText("user.password")).toBeTruthy();
});

describe("fill fields", () => {
  beforeEach(() => {
    const mailInput = screen.getByPlaceholderText("user.mail");
    const passwordField = screen.getByPlaceholderText("user.password");
    userEvent.type(mailInput, "mail@test.fr");
    userEvent.type(passwordField, "12345678");
  });

  it("should reset form when login", async () => {
    const mailInput = screen.getByPlaceholderText("user.mail");
    const passwordInput = screen.getByPlaceholderText("user.password");
    userEvent.click(screen.getByText("user.login"));
    await waitFor(() => expect(mailInput).toHaveDisplayValue(""));
    await waitFor(() => expect(passwordInput).toHaveDisplayValue(""));
  });

  it("should have wrong mail with no @", async () => {
    const mailInput = screen.getByPlaceholderText("user.mail");
    userEvent.clear(mailInput);
    userEvent.type(mailInput, "noarobase");
    userEvent.click(screen.getByText("user.login"));
    await waitFor(() => screen.getByText("user.errorMail"));
  });

  it("should have wrong mail not enough chars", async () => {
    const mailInput = screen.getByPlaceholderText("user.mail");
    userEvent.clear(mailInput);
    userEvent.type(mailInput, "@");
    userEvent.click(screen.getByText("user.login"));
    await waitFor(() => screen.getByText("user.errorMail"));
  });

  it("should have password not long enough", async () => {
    const passwordField = screen.getByPlaceholderText("user.password");
    userEvent.clear(passwordField);
    userEvent.type(passwordField, "psw");
    userEvent.click(screen.getByText("user.login"));
    await waitFor(() => screen.getByText("user.errorPasswordForm"));
  });

  it("should invalid credentials", async () => {
    const mailInput = screen.getByPlaceholderText("user.mail");
    userEvent.clear(mailInput);
    userEvent.type(mailInput, "mail@oui");
    userEvent.click(screen.getByText("user.login"));
    await waitFor(() =>
      screen.getByText(
        "Une erreur est survenue. Veuillez contacter un administrateur système."
      )
    );
  });

  it("should login", async () => {
    userEvent.click(screen.getByText("user.login"));
    await waitFor(() => screen.getByText("Le compte a été créé avec succès !"));
  });
});
