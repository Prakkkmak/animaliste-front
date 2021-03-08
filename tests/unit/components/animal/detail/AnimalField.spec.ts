import { render, screen } from "@testing-library/vue";
import AnimalFieldInput from "@/components/animal/form/AnimalFieldInput.vue";

beforeEach(() => {
  render(AnimalFieldInput, {
    props: {
      label: "field_name",
      value: "field_value",
    },
  });
});

test("should show fieldData", () => {
  screen.getByText(/animalDetail.field_name/);
  screen.getByText(/field_value/);
});
