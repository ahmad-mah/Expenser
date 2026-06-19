import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppSafeView } from '@/shared/ui/AppSafeView';
import { AddTransactionHeader } from '../components/AddTransactionHeader';
import { AddTransactionCard } from '../components/AddTransactionCard';
import { TransactionForm } from '../types';

const initialForm: TransactionForm = {
  isIncome: false,
  amount: '',
  title: '',
  category: null,
};

export default function AddTransactionScreen() {
  const [form, setForm] = useState<TransactionForm>(initialForm);

  const updateForm = (partial: Partial<TransactionForm>) =>
    setForm((prev) => ({ ...prev, ...partial }));

  return (
    <AppSafeView>
      <View style={styles.container}>
        <AddTransactionHeader form={form} />
        <AddTransactionCard form={form} updateForm={updateForm}  />
      </View>
    </AppSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 30,
    gap: 24,
  },
});
