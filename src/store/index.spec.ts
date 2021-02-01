import store from "./index";

const TOKEN = "TOKEN123456";

describe("regular scenario", () => {
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
});
