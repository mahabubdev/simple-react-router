import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// custom test
test('render test', () => {
  const testRenderContainer = document.createElement('div');
  testRenderContainer.id = 'react_test_app_render';
  render(<App />, testRenderContainer);
  testRenderContainer.remove();
});