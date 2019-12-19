import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class SignupScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '네임',
      uid: '아이디',
      email: '이메일',
      pwd: '비밀번호',
    };
  }
  render() {
    const {name, uid, email, pwd} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>SWITCH {'\n'}계정만들기</Text>
        <TextInput
          placeholder="이름"
          onChangeText={val => this._onChangeTextOf('name', val)}
          value={name}
          style={styles.textInput}
        />
        <Text style={styles.descText}>
          회원가입시 이용약관에 동의한 것으로 간주합니다.
        </Text>
      </View>
    );
  }
  _onChangeTextOf = (key, val) => {
    this.setState({[key]: val});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    color: '#5b5a5a',
    marginTop: 81,
    marginBottom: 115,
  },
  textInput: {
    paddingHorizontal: 10,
    height: 50,
    width: 288,
    borderWidth: 1,
    borderColor: '#5b5a5a',
  },
  descText: {
    marginTop: 20,
    fontSize: 12,
    color: '#5b5a5a',
    fontWeight: 'bold',
  },
});
