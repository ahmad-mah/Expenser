import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

interface AuthLinkProps {
  question: string;
  label: string;
  href: string;
}

export function AuthLink({ question, label, href }: AuthLinkProps) {
  return (
    <View style={styles.container}>
      <Text>{question} </Text>
      <Link href={href as any}>
        <Text>{label}</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 4,
    marginTop: 12,
    alignItems: 'center',
  },
});
