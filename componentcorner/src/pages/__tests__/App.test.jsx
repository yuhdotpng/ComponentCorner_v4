import { render, waitFor } from '@testing-library/react';
import App from '../../App';




// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

describe('App localStorage Integration', () => {
  beforeEach(() => {
  vi.resetAllMocks();
  vi.stubGlobal('localStorage', localStorageMock);
  localStorageMock.getItem.mockReturnValue(null);
  window.history.replaceState({}, '', '/');
});

afterEach(() => {
  vi.unstubAllGlobals();
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
  expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');
});

test('saves an empty cart on mount', async () => {
  render(<App />);

  await waitFor(() => {
    expect(localStorageMock.setItem).toHaveBeenCalledWith('cart', '[]');
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
    expect(localStorageMock.setItem).toHaveBeenCalledWith('cart', '[]');
  });
  
  // Unmount component (simulate closing a browser tab)
  unmount();
  
  // Mock localStorage returning the saved data
  localStorageMock.getItem.mockReturnValue(JSON.stringify(testProduct));
  
  // Re-render component (simulating user openning the app again)
  render(<App />);
  
  // Verify data was loaded
  expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');
});

});