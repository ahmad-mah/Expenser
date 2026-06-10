import { useState } from 'react';
import { useSignIn as useClerkSignIn } from '@clerk/expo';
import { useRouter } from 'expo-router';
import { finalizeNavigation } from '../utils';

export function useSignIn() {
  const { signIn, errors, fetchStatus } = useClerkSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const { error } = await signIn.password({
      emailAddress,
      password,
    });
    if (error) {
      console.error(JSON.stringify(error, null, 2));
      return;
    }

    if (signIn.status === 'complete') {
      await signIn.finalize({
        navigate: ({ decorateUrl }) => {
          finalizeNavigation(decorateUrl);
        },
      });
    } else if (signIn.status === 'needs_client_trust') {
      const emailCodeFactor = signIn.supportedSecondFactors.find(
        (factor) => factor.strategy === 'email_code',
      );
      if (emailCodeFactor) {
        await signIn.mfa.sendEmailCode();
      }
      router.push('/verify?type=signin');
    } else {
      console.error('Sign-in attempt not complete:', signIn);
    }
  };

  return {
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
    errors,
    fetchStatus,
    signIn,
    handleSubmit,
  };
}
