import { View, Text, FlatList, StyleSheet } from 'react-native';
import Gap from '@/shared/ui/Gap';
import { TransactionItem } from './TransactionItem';

const transactions = [
  {
    id: '1',
    title: 'Freelance Work',
    subtitle: 'Upwork',
    amount: 1200,
    type: 'income' as const,
    date: 'Jun 14, 2026',
    icon: 'briefcase-outline' as const,
  },
  {
    id: '2',
    title: 'Groceries',
    subtitle: 'Walmart',
    amount: 85.5,
    type: 'expense' as const,
    date: 'Jun 13, 2026',
    icon: 'cart-outline' as const,
  },
  {
    id: '3',
    title: 'Salary',
    subtitle: 'Company Inc.',
    amount: 5000,
    type: 'income' as const,
    date: 'Jun 1, 2026',
    icon: 'wallet-outline' as const,
  },
];

export function RecentTransactions() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <Gap height={12} />}
        renderItem={({ item }) => (
          <TransactionItem
            title={item.title}
            subtitle={item.subtitle}
            amount={item.amount}
            type={item.type}
            date={item.date}
            icon={item.icon}
            onDelete={() => {}}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 12,
  },
  listContent: {
    paddingVertical: 10,
    paddingHorizontal: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#413a35',
  },
});
