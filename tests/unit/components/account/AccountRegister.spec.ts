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

test("should register", async () => {
  const mailInput = screen.getByPlaceholderText("account.mail");
  const passwordFields = screen.getAllByPlaceholderText("account.password");
  userEvent.type(mailInput, "mail@test.fr");
  expect(screen.getByDisplayValue(/mail@test.fr/)).toBeTruthy();
  userEvent.type(passwordFields[0], "12345678");
  userEvent.type(passwordFields[1], "12345678");
  await userEvent.click(screen.getByText("account.register"));
  screen.debug();
  await waitFor(() => {}, { timeout: 5000 });
  screen.debug();
  expect(mailInput).toHaveDisplayValue("");
});
