import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
// import { View } from 'native-base';

// export default () =>{
    const Register = ()=>{


    return(
        <View style={s.container}>
                <Text>Register</Text>
        </View>
        // <Text>Login</Text>
    )
}
const s = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignSelf:'center'
    }
})
export default Register