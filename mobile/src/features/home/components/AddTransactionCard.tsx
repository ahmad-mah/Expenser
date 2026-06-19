import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CategoryPicker } from '@/features/categories/components/CategoryPicker';
import { TransactionForm } from '../types';

interface Props {
  form: TransactionForm;
  updateForm: (partial: Partial<TransactionForm>) => void;
}

export function AddTransactionCard({ form, updateForm }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.typeRow}>
        <Pressable
          style={[styles.typeButton, !form.isIncome && styles.typeButtonActive]}
          onPress={() => updateForm({ isIncome: false })}
        >
          <Ionicons
            name="arrow-down-circle"
            size={20}
            color={!form.isIncome ? '#fff' : '#d32f2f'}
          />
          <Text style={[styles.typeText, !form.isIncome && styles.typeTextActive]}>Expense</Text>
        </Pressable>
        <Pressable
          style={[styles.typeButton, form.isIncome && styles.typeButtonActive]}
          onPress={() => updateForm({ isIncome: true })}
        >
          <Ionicons name="arrow-up-circle" size={20} color={form.isIncome ? '#fff' : '#2e7d32'} />
          <Text style={[styles.typeText, form.isIncome && styles.typeTextActive]}>Income</Text>
        </Pressable>
      </View>

      <View style={styles.amountRow}>
        <Ionicons name="logo-usd" size={28} color="#413a35" />
        <TextInput
          style={styles.amountInput}
          placeholder="0.00"
          placeholderTextColor="rgba(139, 89, 63, 0.6)"
          value={form.amount}
          keyboardType="decimal-pad"
          onChangeText={(text) => {
            updateForm({ amount: text.replace(/[^0-9.]/g, '') });
          }}
          inputMode="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="create-outline" size={18} color="#8b593f" />
        <TextInput
          style={styles.input}
          placeholder="Transaction Title"
          placeholderTextColor="#aaa"
          value={form.title}
          onChangeText={(val) => updateForm({ title: val })}
        />
      </View>

      <CategoryPicker selected={form.category} onSelect={(id) => updateForm({ category: id })} />
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
    elevation: 4,
    gap: 20,
  },
  typeRow: {
    flexDirection: 'row',
    gap: 10,
  },
  typeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  typeButtonActive: {
    backgroundColor: '#8b593f',
    borderColor: '#8b593f',
  },
  typeText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  typeTextActive: {
    color: '#fff',
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 16,
  },
  amountInput: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#413a35',
    paddingVertical: 0,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#413a35',
  },
});
