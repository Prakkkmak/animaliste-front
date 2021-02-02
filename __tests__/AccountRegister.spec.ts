import { render } from "@testing-library/vue";
import AccountRegister from "@/components/account/AccountRegister.vue";
import { register } from "../src/api/user.api";

jest.mock("@/api/user.api.ts");

beforeEach(() => {
  render(AccountRegister);
});

test("blah", () => {
  console.log("a");
});
