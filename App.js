import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import IntroScreen from './components/Screens/IntroScreen';
import LoginScreen from './components/Screens/LoginScreen';
import TournamentScreen from './components/Screens/TournamentScreen';
import PreGameScreen from './components/Screens/PreGameScreen';
import GameScreen from './components/Screens/GameScreen';
import EndScreen from './components/Screens/EndScreen';
import MatchesScreen from './components/Screens/MatchesScreen';

const MainNavigator = createStackNavigator({
  Intro: {screen: IntroScreen},
  Login: {screen: LoginScreen},
  Matches: {screen : MatchesScreen},
  Tournaments: {screen: TournamentScreen},
  PreGame: {screen: PreGameScreen},
  Game: {screen: GameScreen},
  End: {screen: EndScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
