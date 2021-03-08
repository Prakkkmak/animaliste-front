/* FIXME
import { render, screen, waitFor } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import FieldAutocomplete from "@/components/form/FieldAutocomplete.vue";

beforeEach(() => {
  render(FieldAutocomplete, {
    props: {
      choices: ["autocomplete1", "autocomplete2", "hello", "testouille"],
    },
  });
});

it("should field empty", () => {
  screen.getByDisplayValue("");
});

it("should get all choices", () => {
  screen.getByText("autocomplete1");
  screen.getByText("autocomplete2");
  screen.getByText("hello");
  screen.getByText("testouille");
});

it("should get not all choices after type", async () => {
  const inputField = screen.getByDisplayValue("");
  userEvent.type(inputField, "auto");
  screen.getByText("autocomplete1");
  screen.getByText("autocomplete2");
  await waitFor(() => expect(screen.queryByText("hello")).toBeFalsy());
  await waitFor(() => expect(screen.queryByText("testouille")).toBeFalsy());
});

it("should get back after clear", async () => {
  const inputField = screen.getByDisplayValue("");
  userEvent.type(inputField, "he");
  await waitFor(() => expect(screen.queryByText("autocomplete1")).toBeFalsy());
  userEvent.clear(inputField);
  await waitFor(() => expect(screen.queryByText("autocomplete1")).toBeTruthy());
});

it("should change input after selected", async () => {
  const inputField = screen.getByDisplayValue("");
  await waitFor(() => expect(screen.queryByDisplayValue("hello")).toBeFalsy());
  userEvent.click(inputField);
  userEvent.click(screen.getByText("hello"));
  await waitFor(() => expect(screen.queryByDisplayValue("hello")).toBeTruthy());
});

it("should not have any dropdown if same text in input", async () => {
  const inputField = screen.getByDisplayValue("");
  await waitFor(() => expect(screen.queryAllByText("hello").length).toBe(1)); // hello du dropdown
  userEvent.type(inputField, "hello");
  await waitFor(() => expect(screen.queryAllByText("hello").length).toBe(1)); // hello de l'input field
});

it("should not have any dropdown if no one exists", async () => {
  const inputField = screen.getByDisplayValue("");
  await waitFor(() => expect(screen.queryAllByText("hello").length).toBe(1)); // hello du dropdown
  userEvent.type(inputField, "i don't exist");
  await waitFor(() => expect(screen.queryByDisplayValue("autocomplete1")).toBeFalsy()); // hello de l'input field
  await waitFor(() => expect(screen.queryByDisplayValue("autocomplete2")).toBeFalsy()); // hello de l'input field
  await waitFor(() => expect(screen.queryByDisplayValue("hello")).toBeFalsy()); // hello de l'input field
  await waitFor(() => expect(screen.queryByDisplayValue("testouille")).toBeFalsy()); // hello de l'input field
});
*/
