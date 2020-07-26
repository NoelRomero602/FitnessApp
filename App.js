import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Clock from '../AIfitness/components/clock';
export default function App() {
  let isRestarted = false;
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Clock data={isRestarted}/>
      <StatusBar style="auto" />
      <Button title="Restart" onPress={() => {isRestarted = true;}}/>
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
