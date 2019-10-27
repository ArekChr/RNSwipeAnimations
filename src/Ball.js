import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';

export default class Ball extends React.Component {
  UNSAFE_componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: {
        x: 320,
        y: 750,
      },
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black',
  },
});
