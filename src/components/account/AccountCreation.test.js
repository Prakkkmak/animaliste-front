import { render, fireEvent } from '@testing-library/vue';
import AccountCreation from './AccountCreation';

// TODO Encore creation

test('click in empty form should return errors', async () => {
  // The render method returns a collection of utilities to query your component.
  const { getByText } = render(AccountCreation);

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  const button = getByText('Enregistrer');

  // Dispatch a native click event to our button element.
  await fireEvent.click(button);

  getByText('Mail incorrect.');
  getByText('Mot de passe incorrect.');
});
