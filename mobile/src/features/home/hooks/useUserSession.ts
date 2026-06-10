import { useUser } from '@clerk/expo';
import { useClerk } from '@clerk/expo';

export function useUserSession() {
  const { user } = useUser();
  const { signOut } = useClerk();

  return {
    email: user?.emailAddresses[0]?.emailAddress,
    signOut,
  };
}
