import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTurnedOn: false,
    };
  }
  static navigationOptions = {
    title: 'Switch',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>MainScreen</Text>
        <Text style={styles.textSetting}>설정</Text>
        <TouchableOpacity onPress={() => navigate('Home')}>
          <Image
            source={require('./images/switch_off.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 36,
    marginBottom: 30,
  },
  textSetting: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    marginBottom: 30,
  },
  image: {
    width: 185,
    height: 300,
    marginTop: 10,
  },
});
