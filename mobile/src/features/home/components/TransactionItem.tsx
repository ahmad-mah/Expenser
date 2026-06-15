import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TransactionItemProps {
  title: string;
  subtitle: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
  icon: keyof typeof Ionicons.glyphMap;
  onDelete: () => void;
}

export function TransactionItem({
  title,
  subtitle,
  amount,
  type,
  date,
  icon,
  onDelete,
}: TransactionItemProps) {
  const color = type === 'income' ? '#2e7d32' : '#d32f2f';
  const sign = type === 'income' ? '+' : '-';

  return (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <View style={[styles.iconCircle, { backgroundColor: '#f0e8e0' }]}>
          <Ionicons name={icon} size={24} color={color} />
        </View>
        <View style={styles.textColumn}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.amountColumn}>
          <Text style={[styles.amount, { color }]}>
            {sign}${Math.abs(amount).toFixed(2)}
          </Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.verticalDivider} />
        <Pressable onPress={onDelete} style={styles.deleteButton}>
          <Ionicons name="trash-outline" size={18} color="#8b593f" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 1,
  },
  leftSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColumn: {
    flexShrink: 1,
    gap: 2,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#413a35',
  },
  subtitle: {
    fontSize: 13,
    color: '#8b593f',
    opacity: 0.7,
  },
  rightSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 12,
  },
  amountColumn: {
    alignItems: 'flex-end',
    gap: 4,
  },
  amount: {
    fontSize: 17,
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: '#8b593f',
    opacity: 0.7,
  },
  verticalDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#f0e8e0',
  },
  deleteButton: {
    padding: 4,
  },
});
