import React from 'react';
import {View ,Text } from 'react-native';
import AuthStack from './src/navigators/AuthStack'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

console.disableYellowBox = true;
const RootNavigator = createSwitchNavigator(
  {
   
    Auth: AuthStack,
  },
  {
    initialRouteName: "Auth",
  }
);

const AppNavigator = createAppContainer(RootNavigator)
const App =()=>{
  return(
    // <View>
      
    //   <Text>HI</Text>
    // </View>
    <AppNavigator />

    
  )
}
export default App