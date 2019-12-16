import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import IntroScreen from './components/Screens/IntroScreen';
import LoginScreen from './components/Screens/LoginScreen';
import PreGameScreen from './components/Screens/PreGameScreen';
import GameScreen from './components/Screens/GameScreen';
import EndScreen from './components/Screens/EndScreen';

const MainNavigator = createStackNavigator({
  Intro: {screen: IntroScreen},
  Login: {screen: LoginScreen},
  PreGame: {screen: PreGameScreen},
  Game: {screen: GameScreen},
  End: {screen: EndScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
