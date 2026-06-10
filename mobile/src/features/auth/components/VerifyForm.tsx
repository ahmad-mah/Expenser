import React from 'react';
import { Pressable, StyleSheet, TextInput, View, Text } from 'react-native';

interface VerifyFormProps {
  code: string;
  onCodeChange: (value: string) => void;
  errors: { fields: Record<string, any> };
  fetchStatus: string;
  onVerify: () => void;
  onResendCode?: () => void;
  onReset?: () => void;
  title?: string;
}

export function VerifyForm({
  code,
  onCodeChange,
  errors,
  fetchStatus,
  onVerify,
  onResendCode,
  onReset,
  title = 'Verify your account',
}: VerifyFormProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <TextInput
        style={styles.input}
        value={code}
        placeholder="Enter your verification code"
        placeholderTextColor="#666666"
        onChangeText={onCodeChange}
        keyboardType="numeric"
      />
      {errors.fields.code && (
        <Text style={styles.error}>{errors.fields.code.message}</Text>
      )}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          fetchStatus === 'fetching' && styles.buttonDisabled,
          pressed && styles.buttonPressed,
        ]}
        onPress={onVerify}
        disabled={fetchStatus === 'fetching'}
      >
        <Text style={styles.buttonText}>Verify</Text>
      </Pressable>
      {onResendCode && (
        <Pressable
          style={({ pressed }) => [styles.secondaryButton, pressed && styles.buttonPressed]}
          onPress={onResendCode}
        >
          <Text style={styles.secondaryButtonText}>I need a new code</Text>
        </Pressable>
      )}
      {onReset && (
        <Pressable
          style={({ pressed }) => [styles.secondaryButton, pressed && styles.buttonPressed]}
          onPress={onReset}
        >
          <Text style={styles.secondaryButtonText}>Start over</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
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
  },
  secondaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  secondaryButtonText: {
    color: '#0a7ea4',
    fontWeight: '600',
  },
  error: {
    color: '#d32f2f',
    fontSize: 12,
    marginTop: -8,
  },
});
