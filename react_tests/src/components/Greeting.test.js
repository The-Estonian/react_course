import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component tests', () => {
  test('Greeting to render Hello World', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('Greeting paragraph text check', () => {
    render(<Greeting />);
    const paragraphElement = screen.getByText("It's good to see you!");
    expect(paragraphElement).toBeInTheDocument();
  });

  test('render h1Para "Insanity"', () => {
    render(<Greeting />);
    const h1Para = screen.getByRole('heading', { name: 'Insanity' });
    expect(h1Para).toBeInTheDocument();
  });

  test('render h1Para "Logic" after click', () => {
    render(<Greeting />);
    const h1Para = screen.getByRole('heading', { name: 'Insanity' });
    fireEvent.click(h1Para);
    expect(screen.queryByText('Insanity')).toBeNull();
    const newH1Para = screen.getByRole('heading', { name: 'Logic' });
    expect(newH1Para).toBeInTheDocument();
  });
});
