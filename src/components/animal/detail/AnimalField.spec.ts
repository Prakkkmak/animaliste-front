import 'jest';
import { render, screen } from "@testing-library/vue";
import AnimalField from "./AnimalField.vue";

const fieldData = {
  key: "field_name",
  value: "field_value",
};

beforeEach(() => {
  render(AnimalField, {
    props: {
      fieldData,
    },
  });
});

test("should show fieldData", () => {
  screen.getByText(/field_name/);
  screen.getByText(/field_value/);
});
