import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.matchMedia = jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
  window.IntersectionObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

test('renders resume-aligned sections and contact links', () => {
  render(<App />);
  expect(screen.getAllByText('Cognizant')).toHaveLength(2);
  expect(screen.getAllByText('ValueLabs')).toHaveLength(2);
  expect(screen.getByText('Cloud-Native E-Commerce Platform')).toBeInTheDocument();
  expect(screen.getByText('Real-Time Chat Application')).toBeInTheDocument();
  expect(screen.getByText('SmartSpend: Predictive Financial Intelligence Platform')).toBeInTheDocument();
  expect(screen.getByText('Planventory: Inventory Planning System')).toBeInTheDocument();
  expect(screen.getByText('Master of Computer Science')).toBeInTheDocument();
  expect(screen.getByText('AWS Certified Developer Associate')).toBeInTheDocument();
  expect(screen.getByText('Microsoft Azure Developer Associate')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /sandeep\.enamandala@gmail.com/ })).toHaveAttribute('href', 'mailto:sandeep.enamandala@gmail.com');
  expect(screen.getByRole('link', { name: /234-296-3538/ })).toHaveAttribute('href', 'tel:+12342963538');
  expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/Sandeep_Enamandala_Resume.pdf');
  expect(screen.queryByText('UnitedHealth Group')).not.toBeInTheDocument();
  expect(screen.queryByText('AT&T')).not.toBeInTheDocument();
});
