import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class RepCounter extends Component {

    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }

    onPress = () => {
        this.setState({
            count: this.state.count +1
        });
    };

    render(){
        const {count} = this.state;
        return(
            <View >
                <View style={styles.countContainer}>
        <Text>Rep#: {count}</Text>
                </View>
                <TouchableOpacity style={styles.button}
          onPress={this.onPress}><Text>click here</Text></TouchableOpacity>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });
  export default RepCounter;
