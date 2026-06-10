import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSignIn } from '../hooks/useSignIn';
import { AuthForm } from '../components/AuthForm';

export default function SignInScreen() {
  const { control, errors, fetchStatus, isSubmitting, onSubmit } = useSignIn();

  return (
    <SafeAreaView style={styles.screen}>
      <AuthForm
        mode="signin"
        control={control}
        errors={errors}
        fetchStatus={fetchStatus}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
