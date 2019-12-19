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
    console.log('isTurnedOn:', this.state.isTurnedOn);
    const {isTurnedOn} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>MainScreen</Text>
        <TouchableOpacity onPress={() => navigate('SignupScreen')}>
          <Text style={styles.textSetting}>설정</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._toggleSwitch()}>
          <Image
            source={
              isTurnedOn
                ? require('./images/switch_on.png')
                : require('./images/switch_off.png')
            }
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    );
  }
  _toggleSwitch = () => {
    console.log('toggled');
    this.setState({isTurnedOn: !this.state.isTurnedOn});
  };
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
