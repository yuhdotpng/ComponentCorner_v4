import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartItem from '../../assets/components/CartItem';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('CartItem', () => {
  test('displays items in cart and remove button', () => {
    renderWithRouter(
      <CartItem 
        name="Test Product" 
        price= {1.99}
        onRemoveFromCart= '{()}'
        >
      </CartItem>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('1.99')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /remove/i })
    ).toBeInTheDocument();
});

test('calls removeFromCart when remove button is clicked', () => {
  const mockRemove = vi.fn();
  const item = { id: 1, name: 'Test Product', price: 1.99 };
  renderWithRouter(
      <CartItem {...item}
        item= {item}
        onRemoveFromCart = {mockRemove}
        >
      </CartItem>
    );
  
  const rmvButton = screen.getByRole('button', { name: /remove/i });
  fireEvent.click(rmvButton);
  
   
  expect(mockRemove).toHaveBeenCalledTimes(1);
  expect(mockRemove).toHaveBeenCalledWith(item.index)
  
});

});