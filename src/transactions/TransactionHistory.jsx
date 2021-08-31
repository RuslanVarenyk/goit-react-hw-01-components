import PropTypes, { shape, string, number } from 'prop-types';
import styles from './transaction.module.css'

function TransactionHistory({items}) {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => 
                    <tr>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                )}
            </tbody>
        </table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(shape({
        type: string.isRequired,
        amount: number.isRequired,
        currency: string.isRequired,
    })),
}