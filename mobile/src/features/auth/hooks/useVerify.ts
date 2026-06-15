import { useState, useEffect, useCallback } from 'react';
import { useSignIn, useSignUp } from '@clerk/expo';
import { useRouter, useLocalSearchParams } from 'expo-router';

export function useVerify() {
  const { type } = useLocalSearchParams<{ type: string }>();
  const { signIn, errors: signInErrors, fetchStatus: signInFetchStatus } = useSignIn();
  const { signUp, errors: signUpErrors, fetchStatus: signUpFetchStatus } = useSignUp();
  const router = useRouter();
  const [code, setCode] = useState('');

  const isValid = type === 'signin' || type === 'signup';
  const isSignIn = type === 'signin';
  const errors = isSignIn ? signInErrors : signUpErrors;
  const fetchStatus = isSignIn ? signInFetchStatus : signUpFetchStatus;

  useEffect(() => {
    if (!isValid) {
      router.replace('/sign-in');
    }
  }, [isValid, router]);

  const navigateHome = useCallback(() => {
    router.replace('/(home)');
  }, [router]);

  const handleVerify = useCallback(async () => {
    if (!isValid) return;

    if (isSignIn) {
      await signIn?.mfa?.verifyEmailCode({ code });
      if (signIn?.status === 'complete') {
        await signIn.finalize();
        navigateHome();
      }
    } else {
      await signUp?.verifications?.verifyEmailCode({ code });
      if (signUp?.status === 'complete') {
        await signUp.finalize();
        navigateHome();
      }
    }
  }, [isValid, isSignIn, code, signIn, signUp, navigateHome]);

  const handleResendCode = useCallback(async () => {
    if (!isValid) return;

    if (isSignIn) {
      await signIn?.mfa?.sendEmailCode();
    } else {
      await signUp?.verifications?.sendEmailCode();
    }
  }, [isValid, isSignIn, signIn, signUp]);

  const handleReset = useCallback(() => {
    if (!isValid) return;

    if (isSignIn) {
      signIn?.reset();
    } else {
      signUp?.reset();
    }
    router.back();
  }, [isValid, isSignIn, signIn, signUp, router]);

  return {
    code,
    setCode,
    errors,
    fetchStatus,
    handleVerify,
    handleResendCode,
    handleReset,
  };
}
