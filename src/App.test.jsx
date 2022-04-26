import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

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


describe('The header should render with an image and a profile name', () => {
  it('Should render the header', async () => {
   // look for alt text: "Alchemy Logo"
    render( <App />);
    screen.getByAltText('Alchemy Logo');

    screen.getByText(/loading/i);
    
    await screen.findByAltText('header');
    screen.getAllByText(/vonta/i);
    // screen.debug();
    
  })

})
