import { render, screen } from '@testing-library/react';
import Home from './Home';

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(
  <Home user={user} />
  )
  // screen.getByText(/loading/i);
  await screen.findByAltText('header');
  screen.getByText(/vonta/i);
  screen.getByText(/verba/i);
  screen.getByText(/interests/i);
  screen.getByAltText('avatar');
  screen.getByAltText('header');
  screen.getAllByRole('listitem');
  screen.debug();
})
