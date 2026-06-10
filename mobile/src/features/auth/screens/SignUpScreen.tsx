import { useSignUp } from '../hooks/useSignUp';
import { SignUpForm } from '../components/SignUpForm';
import { AuthLink } from '../components/AuthLink';

export default function SignUpScreen() {
  const {
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
    errors,
    fetchStatus,
    handleSubmit,
  } = useSignUp();

  return (
    <>
      <SignUpForm
        emailAddress={emailAddress}
        onEmailChange={setEmailAddress}
        password={password}
        onPasswordChange={setPassword}
        errors={errors}
        fetchStatus={fetchStatus}
        onSubmit={handleSubmit}
      />
      <AuthLink question="Already have an account?" label="Sign in" href="/sign-in" />
    </>
  );
}
