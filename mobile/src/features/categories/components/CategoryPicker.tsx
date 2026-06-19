import { View, Text, Pressable, StyleSheet, LayoutAnimation } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Gap from '@/shared/ui/Gap';
import { useEffect, useState } from 'react';
import { getCategory } from '../api/category.api';
import Category from '../types';

interface CategoryPickerProps {
  selected: string | null;
  onSelect: (key: string) => void;
}

export function CategoryPicker({ selected: selectedCategory, onSelect }: CategoryPickerProps) {
  const [data, setData] = useState<[Category] | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await getCategory();
        setData(res.data);
      } catch (error) {}
    };

    loadData();
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <Ionicons name="pricetag-outline" size={16} color="#8b593f" />
        <Text style={styles.title}>Category</Text>
      </View>

      <Gap height={14} />

      {data && (
        <View style={styles.row}>
          {data.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <Pressable
                key={cat.id}
                style={[styles.button, isActive && styles.buttonActive]}
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                  onSelect(cat.id);
                }}
              >
                <Ionicons name={cat.icon as any} size={20} color={isActive ? '#fff' : '#8b593f'} />
                <Text style={[styles.label, isActive && styles.labelActive]}>{cat.name}</Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 12,
    columnGap: 6,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  buttonActive: {
    backgroundColor: '#8b593f',
    borderColor: '#8b593f',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  labelActive: {
    color: '#fff',
  },
});
