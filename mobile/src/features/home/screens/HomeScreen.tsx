import { View, StyleSheet } from 'react-native';
import { HomeHeader } from '../components/HomeHeader';
import { BalanceCard } from '../components/BalanceCard';
import { RecentTransactions } from '../components/RecentTransactions';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <BalanceCard />
      <RecentTransactions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    gap: 24,
  },
});
