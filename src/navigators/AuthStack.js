
import { createStackNavigator } from 'react-navigation';
import React from 'react';
import {TouchableHighlight,Text,StyleSheet,View} from 'react-native';
// import {Icon} from 'native-base'
import Login from '../Auth/Login';
import Register from '../Auth/Register';


const AuthStack = createStackNavigator({
  
   
    Login:Login,
   
    Register:Register,
   
     
},
{
    defaultNavigationOptions: ({ navigation }) =>({
        // headerStyle:{backgroundColor:theme.colors.purple},
        // headerTitleStyle:{color:'white',flex:1,textAlign:'center'},
        //   
            // headerRight:(
            // <View></View>
        // )
    } )
},
    (navigationOptions = {
      
    })
)

const styles =StyleSheet.create({
//     yourStyle:{

// },
    // iconStyle:{
    //     fontSize:20
    // }
})

export default AuthStack