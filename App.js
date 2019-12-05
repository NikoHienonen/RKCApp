import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

const MainNavigator = createStackNavigator({
  Game: {screen: GameScreen},
  End: {screen: EndScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
