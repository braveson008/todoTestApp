import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Authentication from '../screens/Authentication/Authentication';
import Main from '../screens/Main/Main';

const Navigator = createStackNavigator(
  {
    Authentication,
    Main,
  },
  { headerMode: 'none' },
);

export default createAppContainer(Navigator);
