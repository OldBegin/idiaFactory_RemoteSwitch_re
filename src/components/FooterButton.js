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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default FooterButton;
