import { useState } from 'react';
import { useSignUp as useClerkSignUp } from '@clerk/expo';
import { useRouter } from 'expo-router';

export function useSignUp() {
  const { signUp, errors, fetchStatus } = useClerkSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const { error } = await signUp.password({
      emailAddress,
      password,
    });
    if (error) {
      console.error(JSON.stringify(error, null, 2));
      return;
    }

    await signUp.verifications.sendEmailCode();
    router.push('/verify?type=signup');
  };

  return {
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
    errors,
    fetchStatus,
    signUp,
    handleSubmit,
  };
}
