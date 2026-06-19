import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { TransactionForm } from '../types';
import { addTransactions } from '../api/transactions.api';

interface Props {
  form: TransactionForm;
}

export function AddTransactionHeader({ form }: Props) {
  const router = useRouter();

  const postData = async () => {
    try {
      if (!form.title || !form.amount || !form.category) {
        Alert.alert('Incomplete form', 'Please fill in all fields before saving.');
        return;
      }
      console.log(form);
      await addTransactions({
        title: form.title,
        amount: Number(form.amount),
        category_id: form.category!,
        type: form.isIncome ? 'income' : 'expenses',
      });

      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.row}>
      <Pressable onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#413a35" />
      </Pressable>
      <Text style={styles.title}>New Transaction</Text>
      <Pressable style={styles.saveButton} onPress={postData}>
        <Text style={styles.saveText}>Save</Text>
        <Ionicons name="checkmark" size={18} color="#8b593f" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#413a35',
    textAlign: 'center',
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  saveText: {
    color: '#8b593f',
    fontSize: 16,
    fontWeight: '600',
  },
});
