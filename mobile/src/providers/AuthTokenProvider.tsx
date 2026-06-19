import { useAuth } from '@clerk/expo';
import { useEffect } from 'react';
import { setTokenGetter } from '@/api/tokenProvider';

export function AuthTokenProvider({ children }: { children: React.ReactNode }) {
  const { getToken, isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      setTokenGetter(() => getToken());
    } else {
      setTokenGetter(() => Promise.resolve(null));
    }
  }, [getToken, isSignedIn]);

  return <>{children}</>;
}