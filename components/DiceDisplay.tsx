import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export function DiceDisplay(value: number) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: '#D3D3D3',
  },
});