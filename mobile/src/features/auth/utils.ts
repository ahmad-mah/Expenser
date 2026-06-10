import { router } from 'expo-router';

export function finalizeNavigation(
  decorateUrl: (url: string) => string,
) {
  const url = decorateUrl('/');
  if (url.startsWith('http')) {
    window.location.href = url;
  } else {
    router.push(url as never);
  }
}
