import { config } from "@vue/test-utils";
import "@testing-library/jest-dom/extend-expect";

config.global.mocks = {
  $t: (msg: string) => msg,
};
