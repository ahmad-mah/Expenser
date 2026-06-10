import { Pressable, Text, StyleSheet } from 'react-native';

interface SignOutButtonProps {
  onSignOut: () => void;
}

export function SignOutButton({ onSignOut }: SignOutButtonProps) {
  return (
    <Pressable style={styles.button} onPress={() => onSignOut()}>
      <Text style={styles.buttonText}>Sign out</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
