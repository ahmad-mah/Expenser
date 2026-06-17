import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, LayoutAnimation } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Category {
  key: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const categories: Category[] = [
  { key: 'food', label: 'Food', icon: 'restaurant-outline' },
  { key: 'transport', label: 'Transport', icon: 'car-outline' },
  { key: 'shopping', label: 'Shopping', icon: 'bag-outline' },
  { key: 'entertainment', label: 'Entertainment', icon: 'tv-outline' },
  { key: 'bills', label: 'Bills', icon: 'receipt-outline' },
  { key: 'salary', label: 'Salary', icon: 'wallet-outline' },
];

export function AddTransactionCard() {
  const [isIncome, setIsIncome] = useState(false);
  const [text, setText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('food');

  return (
    <View style={styles.card}>
      <View style={styles.typeRow}>
        <Pressable
          style={[styles.typeButton, !isIncome && styles.typeButtonActive]}
          onPress={() => setIsIncome(false)}
        >
          <Ionicons name="arrow-down-circle" size={20} color={!isIncome ? '#fff' : '#d32f2f'} />
          <Text style={[styles.typeText, !isIncome && styles.typeTextActive]}>Expense</Text>
        </Pressable>
        <Pressable
          style={[styles.typeButton, isIncome && styles.typeButtonActive]}
          onPress={() => setIsIncome(true)}
        >
          <Ionicons name="arrow-up-circle" size={20} color={isIncome ? '#fff' : '#2e7d32'} />
          <Text style={[styles.typeText, isIncome && styles.typeTextActive]}>Income</Text>
        </Pressable>
      </View>

      <View style={styles.amountRow}>
        <Ionicons name="logo-usd" size={28} color="#413a35" />
        <Text style={styles.amountValue}>0.00</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.inputContainer}>
        <Ionicons name="create-outline" size={18} color="#8b593f" />
        <TextInput
          style={styles.input}
          placeholder="Transaction Title"
          placeholderTextColor="#aaa"
          value={text}
          keyboardType="decimal-pad"
          onChangeText={(val) => setText(val)}
        />
      </View>

      <View style={styles.categoryHeader}>
        <Ionicons name="pricetag-outline" size={16} color="#8b593f" />
        <Text style={styles.categoryTitle}>Category</Text>
      </View>

      <View style={styles.categoryRow}>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <Pressable
              key={cat.key}
              style={[styles.categoryButton, isActive && styles.categoryButtonActive]}
              onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

                return setSelectedCategory(cat.key);
              }}
            >
              <Ionicons name={cat.icon} size={18} color={isActive ? '#fff' : '#8b593f'} />
              <Text style={[styles.categoryLabel, isActive && styles.categoryLabelActive]}>
                {cat.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
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
    alignItems: 'center',
    gap: 4,
  },
  amountValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8b593f',
    opacity: 0.75,
  },
  divider: {
    height: 1,
    backgroundColor: '#f0e8e0',
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
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  categoryButtonActive: {
    backgroundColor: '#8b593f',
    borderColor: '#8b593f',
  },
  categoryLabel: {
    fontSize: 13,
    fontWeight: '500',
  },
  categoryLabelActive: {
    color: '#fff',
  },
});
