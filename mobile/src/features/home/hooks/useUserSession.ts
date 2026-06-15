import { useUser } from '@clerk/expo';
import { useClerk } from '@clerk/expo';

export function useUserSession() {
  const { user } = useUser();
  const { signOut } = useClerk();

  const displayName =
    `${user?.firstName ?? ''} ${user?.lastName ?? ''}`.trim() ||
    user?.emailAddresses[0]?.emailAddress ||
    'User';

  return {
    displayName,
    signOut,
  };
}
