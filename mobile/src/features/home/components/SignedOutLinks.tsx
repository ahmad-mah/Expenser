import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export function SignedOutLinks() {
  return (
    <View style={styles.links}>
      <Link href="/(auth)/sign-in">
        <Text>Sign in</Text>
      </Link>
      <Link href="/(auth)/sign-up">
        <Text>Sign up</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  links: {
    gap: 8,
  },
});
