import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const arr = (new Array(5)).fill(null)

export default function App() {
  return (
    <View style={styles.container}>
      {arr.map((value, index) => (
        <View key={index}>
          <Text>{index + 1}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
