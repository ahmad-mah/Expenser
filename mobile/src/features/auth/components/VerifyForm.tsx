import { ActivityIndicator, Pressable, StyleSheet, TextInput, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import Gap from '@/shared/ui/Gap';

interface VerifyFormProps {
  code: string;
  onCodeChange: (value: string) => void;
  errors: { fields: Record<string, any> };
  fetchStatus: string;
  onVerify: () => void;
  onResendCode?: () => void;
  title?: string;
}

export function VerifyForm({
  code,
  onCodeChange,
  errors,
  fetchStatus,
  onVerify,
  onResendCode,
  title = 'Verify your email',
}: VerifyFormProps) {
  return (
    <View style={styles.root}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        bottomOffset={32}
        extraKeyboardSpace={32}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <TextInput
            style={styles.input}
            value={code}
            placeholder="Enter your verification code"
            placeholderTextColor="#797676"
            textAlign="center"
            onChangeText={onCodeChange}
            keyboardType="numeric"
          />
          {errors.fields.code && <Text style={styles.error}>{errors.fields.code.message}</Text>}

          <Pressable
            style={({ pressed }) => [
              styles.button,
              fetchStatus === 'fetching' && styles.buttonDisabled,
              pressed && styles.buttonPressed,
            ]}
            onPress={onVerify}
            disabled={fetchStatus === 'fetching'}
          >
            {fetchStatus === 'fetching' ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Verify Email</Text>
            )}
          </Pressable>
          {onResendCode && (
            <Pressable
              style={({ pressed }) => [styles.resendButton, pressed && styles.buttonPressed]}
              onPress={onResendCode}
            >
              <Text style={styles.resendButtonText}>I need a new code</Text>
            </Pressable>
          )}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 16,
    alignItems: 'stretch',
    gap: 20,
  },
  title: {
    fontSize: 24,
    color: '#433b37',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#8b593f',
    padding: 14,
    borderRadius: 12,
    alignSelf: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  resendButton: {
    paddingHorizontal: 24,
    alignItems: 'center',
    alignSelf: 'center',
  },
  resendButtonText: {
    color: '#8b593f',
    fontWeight: '600',
    fontSize: 14,
  },
  error: {
    color: '#d32f2f',
    fontSize: 12,
    marginTop: -8,
  },
});
