import { render } from '@testing-library/react';
import HomePage from '../HomePage';
import { describe } from 'vitest';
import { BrowserRouter} from 'react-router-dom';


const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};
describe('HomePage', () => {
  test('renders without crashing', () => {
    renderWithRouter(
      <HomePage />
    );
  });
});