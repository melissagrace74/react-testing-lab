import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AccountContainer from '../../components/AccountContainer';

const testTransactions = [
  { description: 'Groceries', category: 'Food', amount: 50, date: '2026-01-01' },
  { description: 'Gas', category: 'Fuel', amount: 30, date: '2026-01-02' },
  { description: 'Rent', category: 'Housing', amount: 1000, date: '2026-01-03' },
];

describe('Search and Sort Transactions', () => {
  it('filters transactions based on search input', async () => {
    render(<AccountContainer initialTransactions={testTransactions} />);

    await userEvent.type(screen.getByPlaceholderText('Search your Recent Transactions'), 'Gas');

    expect(await screen.findByText('Gas')).toBeInTheDocument();
    expect(screen.queryByText('Groceries')).not.toBeInTheDocument();
    expect(screen.queryByText('Rent')).not.toBeInTheDocument();
  });

  it('sorts transactions by description', async () => {
    render(<AccountContainer initialTransactions={testTransactions} />);

    // Select description sort
    await userEvent.selectOptions(screen.getByRole('combobox'), 'description');

    const rows = screen.getAllByRole('row'); // includes header row
    expect(rows[1]).toHaveTextContent('Gas');
    expect(rows[2]).toHaveTextContent('Groceries');
    expect(rows[3]).toHaveTextContent('Rent');
  });
});
