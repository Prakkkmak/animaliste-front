import { render, fireEvent } from '@testing-library/vue';
import AnimalCreation from '../../../../components/animal/AnimalCreation.vue';

test('click to show modal', async () => {
  
  const { getByText } = render(AnimalCreation);

  const button = getByText("Nouvel animal");

  await fireEvent.click(button);

  getByText('Ajout d\'un animal');
});
