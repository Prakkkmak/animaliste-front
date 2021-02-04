import { render, screen, waitFor } from "@testing-library/vue";
import AccountRegister from "@/components/account/AccountRegister.vue";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(AccountRegister);
});

test("should have placeholder fields", () => {
  expect(screen.getByPlaceholderText("account.mail")).toBeTruthy();
  const passwordFields = screen.getAllByPlaceholderText("account.password");
  expect(passwordFields.length).toEqual(2);
});

describe("fill fields", () => {
  beforeEach(() => {
    const mailInput = screen.getByPlaceholderText("account.mail");
    const passwordFields = screen.getAllByPlaceholderText("account.password");
    userEvent.type(mailInput, "mail@test.fr");
    userEvent.type(passwordFields[0], "12345678");
    userEvent.type(passwordFields[1], "12345678");
  });

  it("should register", async () => {
    const mailInput = screen.getByPlaceholderText("account.mail");
    expect(screen.getByDisplayValue(/mail@test.fr/)).toBeTruthy();
    userEvent.click(screen.getByText("account.register"));
    await waitFor(() => expect(mailInput).toHaveDisplayValue(""));
  });

  it("should have wrong mail", async () => {
    const mailInput = screen.getByPlaceholderText("account.mail");
    userEvent.clear(mailInput);
    userEvent.type(mailInput, "noarobase");
    userEvent.click(screen.getByText("account.register"));
    await waitFor(() => expect(screen.getByText("account.errorMail")));
  });

  it("should have wrong password", async () => {
    const passwordFields = screen.getAllByPlaceholderText("account.password");
    userEvent.clear(passwordFields[0]);
    userEvent.clear(passwordFields[1]);
    userEvent.type(passwordFields[0], "psw");
    userEvent.type(passwordFields[1], "psw");
    userEvent.click(screen.getByText("account.register"));
    await waitFor(() => expect(screen.getByText("account.errorPasswordForm")));
  });

  it("should have password mismatch", async () => {
    const passwordFields = screen.getAllByPlaceholderText("account.password");
    userEvent.type(passwordFields[0], "12345678");
    userEvent.type(passwordFields[1], "123456789");
    userEvent.click(screen.getByText("account.register"));
    await waitFor(() =>
      expect(screen.getByText("account.errorPasswordMismatch"))
    );
  });
});
