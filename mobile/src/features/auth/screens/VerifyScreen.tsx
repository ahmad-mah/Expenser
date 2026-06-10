import { useVerify } from '../hooks/useVerify';
import { VerifyForm } from '../components/VerifyForm';

export default function VerifyScreen() {
  const {
    code,
    setCode,
    errors,
    fetchStatus,
    handleVerify,
    handleResendCode,
  } = useVerify();

  return (
    <VerifyForm
      code={code}
      onCodeChange={setCode}
      errors={errors}
      fetchStatus={fetchStatus}
      onVerify={handleVerify}
      onResendCode={handleResendCode}
    />
  );
}
