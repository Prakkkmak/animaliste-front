import { render } from "@testing-library/vue";
import { register } from "@/api/user.api";
import AccountRegister from "./AccountRegister.vue";

jest.mock("@/api/user.api");

beforeEach(() => {
  render(AccountRegister);
});

test("blah", () => {
  console.log("a");
});