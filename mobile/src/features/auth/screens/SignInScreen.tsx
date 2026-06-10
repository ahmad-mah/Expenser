import { useSignIn } from '../hooks/useSignIn';
import { SignInForm } from '../components/SignInForm';
import { AuthLink } from '../components/AuthLink';

export default function SignInScreen() {
  const {
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
    errors,
    fetchStatus,
    handleSubmit,
  } = useSignIn();

  return (
    <>
      <SignInForm
        emailAddress={emailAddress}
        onEmailChange={setEmailAddress}
        password={password}
        onPasswordChange={setPassword}
        errors={errors}
        fetchStatus={fetchStatus}
        onSubmit={handleSubmit}
      />
      <AuthLink question="Don't have an account?" label="Sign up" href="/sign-up" />
    </>
  );
}
