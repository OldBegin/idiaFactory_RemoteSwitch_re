import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import FooterButton from './components/FooterButton';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pwd: '',
    };
  }
  static navigationOptions = {
    title: 'Welcome....',
  };

  render() {
    console.log('login screen props: ', this.props);
    const {navigate} = this.props.navigation;
    const {email, pwd} = this.state;
    return (
      <View style={styles.container}>
        <Image
          source={require('./images/switch_icon.png')}
          style={styles.image}
        />
        <Text style={styles.welcomeText}>환영합니다.</Text>
        <TextInput
          onChangeText={val => this._onChangeTextOf('email', val)}
          placeholder="아이디/이메일"
          value={email}
          style={styles.textInput}
        />
        <TextInput  
          onChangeText={val => this._onChangeTextOf('pwd', val)}
          placeholder="비밀번호"
          value={pwd}
          style={styles.textInput}
        />
        <FooterButton onPress={()=>navigate('MainScreen')}/>
      </View>
    );
  }
  _onChangeTextOf = (key, value) => {
    this.setState({[key]: value});
  };
  _onSubmit = () => {
    const {navigate} = this.props.navigation;
    () => navigate('MainScreen');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dbdbdb',
  },
  image: {
    marginTop: 103,
    width: 60,
    height: 60,
  },
  welcomeText: {
    marginTop: 70,
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    marginBottom: 30,
  },
  textInput: {
    paddingHorizontal: 10,
    height: 50,
    width: 288,
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderColor: 'gray',
  },
});
