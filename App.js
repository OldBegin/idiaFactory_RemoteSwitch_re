import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/LoginScreen';
import MainScreen from './src/MainScreen';

const AppNavi = createStackNavigator({
  Home: {screen: LoginScreen},
  MainScreen: {screen: MainScreen},
});

const App = createAppContainer(AppNavi);

export default App;
