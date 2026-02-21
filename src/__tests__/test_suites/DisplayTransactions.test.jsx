import { render, screen } from '@testing-library/react';
import AccountContainer from '../../components/AccountContainer';

const testTransactions = [
  { description: 'Groceries', category: 'Food', amount: 50, date: '2026-01-01' },
  { description: 'Gas', category: 'Fuel', amount: 30, date: '2026-01-02' },
  { description: 'Rent', category: 'Housing', amount: 1000, date: '2026-01-03' },
];

describe('Display Transactions', () => {
  it('displays all transactions on startup', async () => {
    render(<AccountContainer initialTransactions={testTransactions} />);

    // Check each transaction is rendered
    expect(await screen.findByText('Groceries')).toBeInTheDocument();
    expect(await screen.findByText('Gas')).toBeInTheDocument();
    expect(await screen.findByText('Rent')).toBeInTheDocument();
  });

  it('shows empty list if no transactions', () => {
    render(<AccountContainer initialTransactions={[]} />);

    const rows = screen.queryAllByRole('row');
    // Only the header row exists
    expect(rows.length).toBe(1);
    expect(screen.getByText('No transactions found')).toBeInTheDocument();
  });
});
