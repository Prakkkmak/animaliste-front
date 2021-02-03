import store from "@/store";

const TOKEN = "TOKEN123456";

beforeEach(() => {
  store.commit("setToken", "");
});
test("store empty token", () => {
  expect(store.state.token.length === 0).toBeTruthy();
});
test("should add token", () => {
  store.commit("setToken", TOKEN);
  expect(store.state.token === TOKEN);
});
