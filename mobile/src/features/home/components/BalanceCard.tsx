import { View, Text, StyleSheet } from 'react-native';
import Gap from '../../../shared/ui/Gap';

interface BalanceItemProps {
  label: string;
  amount: number;
  type: 'income' | 'expense';
}

function BalanceItem({ label, amount, type }: BalanceItemProps) {
  const sign = type === 'income' ? '+' : '-';
  const color = type === 'income' ? '#2fb136' : '#df3838';

  return (
    <View style={styles.balanceItem}>
      <Text style={styles.balanceLabel}>{label}</Text>
      <Text style={[styles.balanceAmount, { color }]}>
        {sign}${Math.abs(amount).toFixed(2)}
      </Text>
    </View>
  );
}

export function BalanceCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.totalLabel}>Total Balance</Text>
      <Text style={styles.totalAmount}>$0.00</Text>
      <Gap height={10} />
      <View style={styles.balanceRow}>
        <View style={styles.balanceRowLeft}>
          <BalanceItem label="Income" amount={0} type="income" />
        </View>
        <View style={styles.verticalDivider} />
        <View style={styles.balanceRowRight}>
          <BalanceItem label="Expenses" amount={0} type="expense" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 1,
  },
  totalLabel: {
    fontSize: 14,
    color: '#8b593f',
    opacity: 0.7,
  },
  totalAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#413a35',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#f0e8e0',
    marginVertical: 16,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceRowLeft: {
    flex: 2,
    alignItems: 'flex-start',
  },
  verticalDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#f0e8e0',
  },
  balanceRowRight: {
    flex: 1,
    alignItems: 'center',
  },
  balanceItem: {
    alignItems: 'center',
    gap: 4,
  },
  balanceLabel: {
    fontSize: 13,
    color: '#8b593f',
    opacity: 0.7,
  },
  balanceAmount: {
    fontSize: 20,
    fontWeight: '600',
  },
});
