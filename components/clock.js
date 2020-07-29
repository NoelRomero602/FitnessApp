import React from "react";
import {StyleSheet, View,Animated, Text, ImagePropTypes} from "react-native";
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

export default class ClockAnimated extends React.Component {
    
  state = {
    reset:false,
    key:0,
    isPlaying: true
  }

  resetFunction = () =>{
     
    this.setState((prevState) => {
      return{  
      key: prevState.key +1
      } 

   });
  }
  puaseFunction = () => {
                   
    this.setState((prevState) => {
      return{  
        isPlaying: !(prevState.isPlaying)
      } 

   });
  }
  
  render(){
     console.log(this.state)
    return(
            <View>
                 <CountdownCircleTimer
                    onComplete={() => {
                    // do your stuff here
                 
                      console.log(this.state);
                    
                    if(this.state.reset){
                    return [true,1500]; // repeat animation in 1.5 seconds
                    }
                    }}
                    
                    key={this.state.key}
                    isPlaying={this.state.isPlaying}
                    duration={3}
                    colors={[
                    ['#004777', 0.4],
                    ['#F7B801', 0.4],
                    ['#A30000', 0.2],
                    ]}
                  >
                    {({ remainingTime, animatedColor }) => (
                    <Animated.Text style={{ color: animatedColor }}>
                        {remainingTime}
                    </Animated.Text>
                    )}
                </CountdownCircleTimer>
            </View>
    );
                    }

                 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
      remainingTime: {
        fontSize: 46,
      },
});