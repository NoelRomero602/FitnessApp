import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Clock from './components/clock';
import RepCounter from './components/RepCounter';
export default function App() {
  let isRestarted = false;
  return (
    <View style={styles.container}>
     <RepCounter/>
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
 