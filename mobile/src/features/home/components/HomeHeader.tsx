import { Image, View, Text, Pressable, StyleSheet } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useUserSession } from '../hooks/useUserSession';

export function HomeHeader() {
  const { displayName, signOut } = useUserSession();

  return (
    <View style={styles.row}>
      <View style={styles.leftSection}>
        <Image
          source={require('@/assets/images/logo.png') as ImageSourcePropType}
          style={styles.logo}
        />
        <View style={styles.headerText}>
          <Text style={styles.welcomeLabel}>Welcome,</Text>
          <Text style={styles.userName} numberOfLines={1}>
            {displayName}
          </Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Pressable style={styles.addButton}>
          <Ionicons name="add" size={22} color="#fff" />
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
        <Pressable style={styles.signOutButton} onPress={() => signOut()}>
          <Ionicons name="log-out-outline" size={22} color="#8b593f" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSection: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  rightSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 12,
  },
  headerText: {
    flexShrink: 1,
    gap: 2,
  },
  welcomeLabel: {
    fontSize: 14,
    color: '#8b593f',
    opacity: 0.7,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#413a35',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#8b593f',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 100,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signOutButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
});
