import type { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface AppSafeViewProps {
  children: ReactNode;
}

export function AppSafeView({ children }: AppSafeViewProps) {
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
