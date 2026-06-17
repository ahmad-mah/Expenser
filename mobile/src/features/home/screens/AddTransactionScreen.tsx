import { View, StyleSheet } from 'react-native';
import { AppSafeView } from '@/shared/ui/AppSafeView';
import { AddTransactionHeader } from '../components/AddTransactionHeader';
import { AddTransactionCard } from '../components/AddTransactionCard';

export default function AddTransactionScreen() {
  return (
    <AppSafeView>
      <View style={styles.container}>
        <AddTransactionHeader />
        <AddTransactionCard />
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
