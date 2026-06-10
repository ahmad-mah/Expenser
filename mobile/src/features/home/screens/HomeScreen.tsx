import { View, Text, StyleSheet } from 'react-native';
import { Show } from '@clerk/expo';
import { useUserSession } from '../hooks/useUserSession';
import { SignedOutLinks } from '../components/SignedOutLinks';
import { UserGreeting } from '../components/UserGreeting';
import { SignOutButton } from '../components/SignOutButton';

export default function HomeScreen() {
  const { email, signOut } = useUserSession();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Show when="signed-out">
        <SignedOutLinks />
      </Show>
      <Show when="signed-in">
        {email && <UserGreeting email={email} />}
        <SignOutButton onSignOut={signOut} />
      </Show>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
