import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Clock from './components/clock';
import RepCounter from './components/RepCounter';
export default class  App extends React.Component {

  constructor(props){
    super(props);
    this.ClockElement= React.createRef();
    this.state = {
      isRestarted:false,
      key:0
    };
}
handlePress= () => {
// stuff happends here
 this.ClockElement.current. resetFunction();
};

pause= () =>{
  this.ClockElement.current.puaseFunction();
}

      render(){
  return (
    <View style={styles.container}>
        <Button title="Restart" onPress={this.handlePress}/>
        <Button title="Pause/Play" onPress={this.pause} />
 
     <RepCounter/>
      <Clock ref={this.ClockElement} data={this.state.key }/>
      <StatusBar style="auto" />
       </View>
  );
      }
} 
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 