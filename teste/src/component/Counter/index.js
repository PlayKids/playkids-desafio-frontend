import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';


class Counter extends Component {
state = {
counter: 0,
};
    render() {
        return (
            <View>

                <View style={styles.counter}>
                    <Text style={styles.counterText}> {this.state.counter} </Text>
                </View>

                <View style={styles.btn}>
                    <Button title="Aumentar valor" onPress={() => {
                        this.setState({counter: this.state.counter + 1});
                    }}
                    />
                </View>

                <View style={styles.btn}>
                <Button title="Diminuir valor" onPress={() => {
                    if (this.state.counter === 0){
                        return
                    } else {
                        this.setState({counter: this.state.counter - 1 });
                    }
                }}
                />
                </View>

                <View style={styles.btn}>
                <Button title="Resetar" onPress={() => {
                    this.setState({counter: this.state.counter = 0 });
                }}
                />
                </View>

            </View>
        );
    };

    
}

const styles = StyleSheet.create({
    counter: {
      margin: 42,
    },

    counterText: {
        fontSize: 45,
    },

    btn: {
        margin: 5,
    },
  });

export default Counter;