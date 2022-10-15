import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe("Greeting component tests", () => {
  test('Greeting to render Hello World', () => {
    // Arrange
    render(<Greeting />);
  
    // Act
    // ... nothing
  
    // Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
})

