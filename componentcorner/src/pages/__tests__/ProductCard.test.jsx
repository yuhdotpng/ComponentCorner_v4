import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../../assets/components/ProductCard';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ProductCard', () => {
  test('displays product information and the Add to Cart button', () => {
    renderWithRouter(
      <ProductCard 
        name="Test Product" 
        price= {1.99}
        onaddtocart= '{()}'
        >
      </ProductCard>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument();

    expect(screen.getByText ('$1.99')).toBeInTheDocument()
  });
  test('calls onAddToCart when add to cart button is clicked', () => {
  const mockAdd = vi.fn();
  const product = { id: 1, name: 'Test Product', price: 1.99 };
  renderWithRouter(
      <ProductCard {...product}
        product={product}
        onAddToCart= {mockAdd}
        >
      </ProductCard>
    );
  
  const addButton = screen.getByRole('button', { name: /add to cart/i });
  fireEvent.click(addButton);
  
   
  expect(mockAdd).toHaveBeenCalledTimes(1);
  expect(mockAdd).toHaveBeenCalledWith(product)
  
});
});