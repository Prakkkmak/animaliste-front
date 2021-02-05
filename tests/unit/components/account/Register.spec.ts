import { render, screen, waitFor } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import AccountRegister from "../../../../src/components/user/Register.vue";

beforeEach(() => {
  render(AccountRegister);
});

test("should have placeholder fields", () => {
  expect(screen.getByPlaceholderText("user.mail")).toBeTruthy();
  const passwordFields = screen.getAllByPlaceholderText("user.password");
  expect(passwordFields.length).toEqual(2);
});

describe("fill fields", () => {
  beforeEach(() => {
    const mailInput = screen.getByPlaceholderText("user.mail");
    const passwordFields = screen.getAllByPlaceholderText("user.password");
    userEvent.type(mailInput, "mail@test.fr");
    userEvent.type(passwordFields[0], "12345678");
    userEvent.type(passwordFields[1], "12345678");
  });

  it("should register", async () => {
    const mailInput = screen.getByPlaceholderText("user.mail");
    expect(screen.getByDisplayValue(/mail@test.fr/)).toBeTruthy();
    userEvent.click(screen.getByText("user.register"));
    await waitFor(() => expect(mailInput).toHaveDisplayValue(""));
  });

  it("should have wrong mail with no @", async () => {
    const mailInput = screen.getByPlaceholderText("user.mail");
    userEvent.clear(mailInput);
    userEvent.type(mailInput, "noarobase");
    userEvent.click(screen.getByText("user.register"));
    await waitFor(() => expect(screen.getByText("user.errorMail")));
  });

  it("should have wrong mail too few chars", async () => {
    const mailInput = screen.getByPlaceholderText("user.mail");
    userEvent.clear(mailInput);
    userEvent.type(mailInput, "@");
    userEvent.click(screen.getByText("user.register"));
    await waitFor(() => expect(screen.getByText("user.errorMail")));
  });

  it("should have password not enough long", async () => {
    const passwordFields = screen.getAllByPlaceholderText("user.password");
    userEvent.clear(passwordFields[0]);
    userEvent.clear(passwordFields[1]);
    userEvent.type(passwordFields[0], "psw");
    userEvent.type(passwordFields[1], "psw");
    userEvent.click(screen.getByText("user.register"));
    await waitFor(() => expect(screen.getByText("user.errorPasswordForm")));
  });

  it("should have password mismatch", async () => {
    const passwordFields = screen.getAllByPlaceholderText("user.password");
    userEvent.type(passwordFields[0], "12345678");
    userEvent.type(passwordFields[1], "123456789");
    userEvent.click(screen.getByText("user.register"));
    await waitFor(() => expect(screen.getByText("user.errorPasswordMismatch")));
  });
});
