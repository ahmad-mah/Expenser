import { View, Text, StyleSheet } from 'react-native';

export default function AddTransactionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Transaction</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#413a35',
  },
});
