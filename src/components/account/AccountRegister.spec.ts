import { render } from "@testing-library/vue";
import { register } from "@/api/user.api";
import AccountRegister from "@/components/account/AccountRegister.vue";

jest.mock("@/api/user.api.ts");

beforeEach(() => {
  render(AccountRegister);
});

test("blah", () => {
  console.log("a");
});
