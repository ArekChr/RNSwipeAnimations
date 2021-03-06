/**
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  PanResponder,
  Modal,
  View,
} from 'react-native';
import Ball from './src/Ball';
import Deck from './src/Deck';
import { Card, Button } from 'react-native-elements';
const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 2,
    text: 'Card #2',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 3,
    text: 'Card #3',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 4,
    text: 'Card #4',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
  {
    id: 5,
    text: 'Card #5',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 6,
    text: 'Card #6',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 7,
    text: 'Card #7',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 8,
    text: 'Card #8',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
];

class App extends React.Component {
  state = {
    modalVisible: false,
  };
  renderCard = item => {
    return (
      <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
        <Text style={{ marginBottom: 10 }}>
          I can customize the Card further.
        </Text>
        <Button
          onPress={() => this.setState({ modalVisible: true })}
          icon={{ name: 'code' }}
          buttonStyle={{ backgroundColor: '#03A9F4' }}
          title="View Now"
        />
      </Card>
    );
  };

  renderNoMoreCards() {
    return (
      <Card title="All done">
        <Text style={{ marginBottom: 10 }}>There's no more content here!</Text>
        <Button buttonStyle={{ backgroundColor: '#03A9F4' }} title="Get more" />
      </Card>
    );
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Deck
            data={DATA}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}
          />
          <Modal
            animated
            animationType="slide"
            presentationStyle="formSheet"
            visible={this.state.modalVisible}>
            <View
              style={[StyleSheet.absoluteFill, { justifyContent: 'center' }]}>
              <Button
                title="close"
                onPress={() => this.setState({ modalVisible: false })}
              />
            </View>
          </Modal>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
