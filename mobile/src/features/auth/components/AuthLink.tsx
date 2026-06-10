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
      <Text style={styles.text}>{question} </Text>
      <Link href={href as any} replace>
        <Text style={styles.link}>{label}</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: '#8b593f',
    fontWeight: '600',
    fontSize: 14,
  },
  text: {
    fontSize: 14,
  },
});
