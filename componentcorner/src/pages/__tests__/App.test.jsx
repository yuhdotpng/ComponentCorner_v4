import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter} from 'react-router-dom';



// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

describe('App localStorage Integration', () => {
  beforeEach(() => {
    // Clear all mock calls before each test
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.removeItem.mockClear();
    localStorageMock.clear.mockClear();
  });

  
test('loads products from localStorage on component mount', () => {
  // Arrange - set up what localStorage should return
  const savedProducts = JSON.stringify([
    { id: 1, name: 'Test Product', price: 1.99 }
  ]);
  localStorageMock.getItem.mockReturnValue(savedProducts);
  
  // Act - render the component
  render(<App />);
  
  // Assert - verify localStorage was checked
  expect(localStorageMock.getItem).toHaveBeenCalledWith('products');
});

test('saves products to localStorage when cart changes', async () => {
  // Mock empty initial state
  localStorageMock.getItem.mockReturnValue([]);
  
  render(<App />);
  
  // Wait for useEffect to complete initial save
  await waitFor(() => {
    expect(localStorageMock.setItem).toHaveBeenCalledWith('products', []);
  });
});

test('persists posts across component remounts', async () => {
  // Initial render with empty localStorage
  localStorageMock.getItem.mockReturnValue('[]');
  
  const { unmount } = render(<App />);
  
  // Simulate posts being added (this would trigger useEffect)
  const testProduct = [{ id: 1, name: 'Test', price: 5 }];
  
  // Verify save happened
  await waitFor(() => {
    expect(localStorageMock.setItem).toHaveBeenCalledWith('products', '[]');
  });
  
  // Unmount component  (simulate closing a browser tab)
  unmount();
  
  // Mock localStorage returning the saved data
  localStorageMock.getItem.mockReturnValue(JSON.stringify(testProducts));
  
  // Re-render component (simulating user openning the app again)
  render(<App />);
  
  // Verify data was loaded
  expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');
});

});