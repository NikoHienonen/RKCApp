import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import PreGameScreen from './components/PreGameScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

const MainNavigator = createStackNavigator({
  PreGame: {screen: PreGameScreen},
  Game: {screen: GameScreen},
  End: {screen: EndScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
