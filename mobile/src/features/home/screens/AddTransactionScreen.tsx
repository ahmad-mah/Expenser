import { View, StyleSheet } from 'react-native';
import { AppSafeView } from '@/shared/ui/AppSafeView';
import { AddTransactionHeader } from '../components/AddTransactionHeader';

export default function AddTransactionScreen() {
  return (
    <AppSafeView>
      <View style={styles.container}>
        <AddTransactionHeader />
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
