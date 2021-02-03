import { fireEvent, render, screen } from "@testing-library/vue";
import AccountRegister from "@/components/account/AccountRegister.vue";
import userEvent from "@testing-library/user-event";
import accountApi from "@/api/user.api";

jest.mock("@/api/user.api.ts");

beforeEach(() => {
  render(AccountRegister);
});

test("should have placeholder fields", () => {
  expect(screen.getByPlaceholderText("account.mail")).toBeTruthy();
  const passwordFields = screen.getAllByPlaceholderText("account.password");
  expect(passwordFields.length).toEqual(2);
});

test("should have wrong mail", () => {
  const mailInput = screen.getByPlaceholderText("account.mail");
  const passwordFields = screen.getAllByPlaceholderText("account.password");
  userEvent.type(mailInput, "mail@test.fr");
  expect(screen.getByDisplayValue("mail@test.fr")).toBeTruthy();
  userEvent.type(passwordFields[0], "12345678");
  userEvent.type(passwordFields[1], "12345678");
});
