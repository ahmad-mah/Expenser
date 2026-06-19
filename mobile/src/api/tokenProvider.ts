let tokenGetter: () => Promise<string | null> = () => Promise.resolve(null);

export function setTokenGetter(getter: () => Promise<string | null>) {
  tokenGetter = getter;
}

export async function getAuthToken(): Promise<string | null> {
  return tokenGetter();
}