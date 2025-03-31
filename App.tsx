import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SOSButton } from './src/components/SOSButton';

export default function App() {
  return (
    <View style={styles.container}>
      <SOSButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
