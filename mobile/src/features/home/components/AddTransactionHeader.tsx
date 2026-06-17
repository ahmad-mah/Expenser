import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export function AddTransactionHeader() {
  const router = useRouter();

  return (
    <View style={styles.row}>
      <Pressable onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#413a35" />
      </Pressable>
      <Text style={styles.title}>New Transaction</Text>
      <Pressable style={styles.saveButton}>
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
