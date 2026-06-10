import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSignUp } from '../hooks/useSignUp';
import { AuthForm } from '../components/AuthForm';

export default function SignUpScreen() {
  const { control, errors, fetchStatus, isSubmitting, onSubmit } = useSignUp();

  return (
    <SafeAreaView style={styles.screen}>
      <AuthForm
        mode="signup"
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
    paddingHorizontal: 24,
  },
});
