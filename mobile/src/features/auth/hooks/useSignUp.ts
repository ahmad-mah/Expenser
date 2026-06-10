import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignUp as useClerkSignUp } from '@clerk/expo';
import { useRouter } from 'expo-router';
import { signUpSchema, type SignUpForm } from '../schemas/signUp.schema';

export function useSignUp() {
  const { signUp, fetchStatus } = useClerkSignUp();
  const router = useRouter();

  const { control, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = handleSubmit(async (data) => {
    const { error } = await signUp.create({
      emailAddress: data.email,
      password: data.password,
    });

    if (error) {
      const clerkErrors = 'errors' in error ? (error as any).errors : [error];
      for (const err of clerkErrors) {
        const field = err.meta?.paramName === 'email_address' ? 'email'
          : err.meta?.paramName === 'password' ? 'password'
          : 'root';
        setError(field, { message: err.message });
      }
      return;
    }

    await signUp.verifications.sendEmailCode();
    router.push('/verify?type=signup');
  });

  return {
    control,
    errors,
    fetchStatus,
    isSubmitting,
    onSubmit,
  };
}
