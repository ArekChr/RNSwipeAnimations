import React, { Component } from 'react';
import { View, PanResponder, Animated, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Deck extends Component {
  constructor(props) {
    super(props);

    this.position = new Animated.ValueXY();

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        this.position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        this.resetPosition();
      },
    });
  }

  getCardStyle() {
    const { position } = this;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 2, 0, SCREEN_WIDTH * 2],
      outputRange: ['-120deg', '0deg', '120deg'],
    });

    return {
      transform: [{ rotate }],
      ...position.getLayout(),
    };
  }

  resetPosition() {
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 },
    }).start();
  }

  renderCards() {
    return this.props.data.map((item, idx) => {
      if (idx === 0) {
        return (
          <Animated.View
            key={item.id}
            style={this.getCardStyle()}
            {...this.panResponder.panHandlers}>
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return this.props.renderCard(item);
    });
  }

  render() {
    return <View>{this.renderCards()}</View>;
  }
}
