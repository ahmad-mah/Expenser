import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignIn as useClerkSignIn } from '@clerk/expo';
import { useRouter } from 'expo-router';
import { signInSchema, type SignInForm } from '../schemas/signIn.schema';
import { Keyboard } from 'react-native';

export function useSignIn() {
  const { signIn, fetchStatus } = useClerkSignIn();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = handleSubmit(async (data) => {
    Keyboard.dismiss();
    const { error } = await signIn.create({
      identifier: data.email,
      password: data.password,
    });

    if (error) {
      const clerkErrors = 'errors' in error ? (error as any).errors : [error];
      for (const err of clerkErrors) {
        const field =
          err.meta?.paramName === 'email_address'
            ? 'email'
            : err.meta?.paramName === 'password'
              ? 'password'
              : 'root';
        setError(field, { message: err.message });
      }
      return;
    }

    if (signIn.status === 'complete') {
      await signIn.finalize();
    }

    router.replace('/(home)');
  });

  return {
    control,
    errors,
    fetchStatus,
    isSubmitting,
    onSubmit,
  };
}
