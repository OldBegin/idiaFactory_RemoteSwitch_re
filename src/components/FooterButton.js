import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

class FooterButton extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.text}>FooterButton</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#645aff',
    borderRadius: 25,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 280,
    backgroundColor: '#645aff',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default FooterButton;
