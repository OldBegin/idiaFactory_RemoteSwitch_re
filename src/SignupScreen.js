import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import FooterButton from './components/FooterButton';

export default class SignupScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      uid: '',
      email: '',
      pwd: '',
    };
  }
  render() {
    const {name, uid, email, pwd} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>SWITCH {'\n'}계정만들기</Text>
        <TextInput
          onChangeText={val => this._onChangeTextOf('name', val)}
          placeholder="이름"
          value={name}
          style={styles.textInput}
        />
        <TextInput
          onChangeText={val => this._onChangeTextOf('uid', val)}
          placeholder="아이디"
          value={uid}
          style={styles.textInput}
        />
        <TextInput
          onChangeText={val => this._onChangeTextOf('email', val)}
          placeholder="이메일"
          value={email}
          style={styles.textInput}
        />
        <TextInput
          onChangeText={val => this._onChangeTextOf('pwd', val)}
          placeholder="비밀번호"
          value={pwd}
          style={styles.textInput}
        />
        <FooterButton />
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
    backgroundColor: '#dbdbdb',
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
    borderWidth: 0.5,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  descText: {
    marginTop: 20,
    fontSize: 12,
    color: '#5b5a5a',
    fontWeight: 'bold',
  },
});
