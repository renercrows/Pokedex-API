import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import App from '../App';

const MockApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

describe('Check if App Component renders', () => {
  test('renders heading', () => {
    render(<MockApp />);
    const headingElement = screen.getByRole('heading', {
      name: /Pokedex/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders textbox', () => {
    render(<MockApp />);
    const textBoxElement = screen.getByRole('textbox');
    expect(textBoxElement).toBeInTheDocument();
  });
});
