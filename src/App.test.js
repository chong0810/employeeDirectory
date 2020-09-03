import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Employee Directory link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/𝐄𝐦𝐩𝐥𝐨𝐲𝐞𝐞 𝐃𝐢𝐫𝐞𝐜𝐭𝐨𝐫𝐲/i);
    expect(linkElement).toBeInTheDocument();
});