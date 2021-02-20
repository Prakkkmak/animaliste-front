import { render, screen } from "@testing-library/vue";
import AnimalFieldInput from "@/components/animal/detail/AnimalFieldInput.vue";

const fieldData = {
  key: "field_name",
  value: "field_value",
};

beforeEach(() => {
  render(AnimalFieldInput, {
    props: {
      fieldData,
    },
  });
});

test("should show fieldData", () => {
  screen.getByText(/field_name/);
  screen.getByText(/field_value/);
});
