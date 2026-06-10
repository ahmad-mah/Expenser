import { ActivityIndicator, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { Controller } from 'react-hook-form';
import type { Control, FieldErrors } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import Gap from '@/shared/ui/Gap';
import { AppText } from '@/shared/ui/AppText';
import { useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AuthLink } from './AuthLink';

interface AuthFormValues {
  email: string;
  password: string;
}

interface AuthFormProps {
  mode: 'signin' | 'signup';
  control: Control<AuthFormValues>;
  errors: FieldErrors<AuthFormValues>;
  fetchStatus: string;
  isSubmitting: boolean;
  onSubmit: () => void;
}

const config = {
  signin: {
    image: require('@/assets/images/sign-in.png') as ImageSourcePropType,
    title: 'Welcome Back',
    button: 'Sign In',
    question: "Don't have an account?",
    link: 'Sign up',
    href: '/sign-up' as const,
  },
  signup: {
    image: require('@/assets/images/sign-up.png') as ImageSourcePropType,
    title: 'Create Account',
    button: 'Sign Up',
    question: 'Already have an account?',
    link: 'Sign in',
    href: '/sign-in' as const,
  },
};

export function AuthForm({
  mode,
  control,
  errors,
  fetchStatus,
  isSubmitting,
  onSubmit,
}: AuthFormProps) {
  const { image, title, button, question, link, href } = config[mode];
  const isDisabled = isSubmitting || fetchStatus === 'fetching';

  const [isObsecure, setIsObsecure] = useState(true);
  const toggleObsecure = () => setIsObsecure((prev) => !prev);
  const passwordRef = useRef<TextInput>(null);

  return (
    <View style={styles.root}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        bottomOffset={32}
        extraKeyboardSpace={32}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        <Gap height={100} />
        <Image source={image} style={styles.image} />
        <Gap height={10} />

        <AppText style={styles.title}>{title}</AppText>
        <Gap height={16} />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              value={value}
              placeholder="Enter email"
              placeholderTextColor="#666666"
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          )}
        />
        {errors.email?.message && <AppText style={styles.error}>{errors.email.message}</AppText>}

        <Gap height={10} />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.passwordContainer}>
              <TextInput
                ref={passwordRef}
                style={styles.passwordInput}
                value={value}
                placeholder="Enter password"
                placeholderTextColor="#666666"
                secureTextEntry={isObsecure}
                onChangeText={onChange}
                onBlur={onBlur}
                returnKeyType="done"
              />
              <Pressable onPress={toggleObsecure} style={styles.eyeIcon}>
                <Ionicons name={isObsecure ? 'eye-off' : 'eye'} size={24} color="#666" />
              </Pressable>
            </View>
          )}
        />
        {errors.password?.message && (
          <AppText style={styles.error}>{errors.password.message}</AppText>
        )}

        <Gap height={24} />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            isDisabled && styles.buttonDisabled,
            pressed && styles.buttonPressed,
          ]}
          onPress={onSubmit}
          disabled={isDisabled}
        >
          {isDisabled ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>{button}</Text>
          )}
        </Pressable>
        <Gap height={14} />

        <AuthLink question={question} label={link} href={href} />
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 320,
    objectFit: 'contain',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#413a35',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    paddingRight: 44,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  eyeIcon: {
    position: 'absolute',
    right: 14,
    padding: 4,
  },
  button: {
    backgroundColor: '#8b593f',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1.1,
  },
  error: {
    color: '#d32f2f',
    fontSize: 13,
    marginTop: 4,
    paddingLeft: 4,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
});
