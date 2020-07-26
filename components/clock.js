import React from "react";
import {StyleSheet, View,Animated, Text, ImagePropTypes} from "react-native";
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

export default function ClockAnimated(props) {
    return(
            <View>
                 <CountdownCircleTimer
                    onComplete={() => {
                    // do your stuff here
                    if(props.data){
                    return [true, 0]; // repeat animation in 1.5 seconds
                    }
                    }}
                    isPlaying
                    duration={10}
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