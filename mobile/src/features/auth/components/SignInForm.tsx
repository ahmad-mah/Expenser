import React from 'react';
import { Pressable, StyleSheet, TextInput, View, Text } from 'react-native';

interface SignInFormProps {
  emailAddress: string;
  onEmailChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  errors: { fields: Record<string, any> };
  fetchStatus: string;
  onSubmit: () => void;
}

export function SignInForm({
  emailAddress,
  onEmailChange,
  password,
  onPasswordChange,
  errors,
  fetchStatus,
  onSubmit,
}: SignInFormProps) {
  const isDisabled = !emailAddress || !password || fetchStatus === 'fetching';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      <Text style={styles.label}>Email address</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        placeholderTextColor="#666666"
        onChangeText={onEmailChange}
        keyboardType="email-address"
      />
      {errors.fields.identifier && (
        <Text style={styles.error}>{errors.fields.identifier.message}</Text>
      )}

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Enter password"
        placeholderTextColor="#666666"
        secureTextEntry
        onChangeText={onPasswordChange}
      />
      {errors.fields.password && (
        <Text style={styles.error}>{errors.fields.password.message}</Text>
      )}

      <Pressable
        style={({ pressed }) => [
          styles.button,
          isDisabled && styles.buttonDisabled,
          pressed && styles.buttonPressed,
        ]}
        onPress={onSubmit}
        disabled={isDisabled}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>

      {errors && (
        <Text style={styles.debug}>{JSON.stringify(errors, null, 2)}</Text>
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
    marginBottom: 8,
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
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
  error: {
    color: '#d32f2f',
    fontSize: 12,
    marginTop: -8,
  },
  debug: {
    fontSize: 10,
    opacity: 0.5,
    marginTop: 8,
  },
});
