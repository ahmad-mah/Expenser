import { View, StyleSheet } from 'react-native';
import { AppSafeView } from '@/shared/ui/AppSafeView';
import { HomeHeader } from '../components/HomeHeader';
import { BalanceCard } from '../components/BalanceCard';
import { RecentTransactions } from '../components/RecentTransactions';

export default function HomeScreen() {
  return (
    <AppSafeView>
      <View style={styles.container}>
        <HomeHeader />
        <BalanceCard />
        <RecentTransactions />
      </View>
    </AppSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    gap: 24,
  },
});
