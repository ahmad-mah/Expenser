import { Text } from 'react-native';

interface UserGreetingProps {
  email: string;
}

export function UserGreeting({ email }: UserGreetingProps) {
  return <Text>Hello {email}</Text>;
}
