import React, { useState } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import firebase from 'react-native-firebase'
// import { View } from 'native-base';
import { Button, Form, Input, Item } from 'native-base';

// export default () =>{
    const Login = ()=>{

        const [email,setEmail] =useState('')
        const [pass,setPass] =useState('')

const onButtonPress=()=>{
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(async(loggedInUser) => {
   console.log("logged in user",loggedInUser)
         
    })
   
      
    
}


    return(
        <View style={s.container}>

                <View style={s.field}>
                <Input
                    style={{}}
                    placeholder="Enter your email"
                    autoCapitalize="none"
                    autoCorrect={false}                
                    value={email}
                    onChangeText={x => setEmail(x)}

                />
                </View>
                  
                <View style={s.field}>
                <Input
                    style={{}}
                    placeholder="Enter your pass"
                    autoCapitalize="none"
                    autoCorrect={false}                
                    value={pass}
                    onChangeText={x => setPass(x)}

                />
                </View>

                <Button
                    style={s.buttonStyle}
                    onPress={() =>
                    onButtonPress()
                    }
                >
                    <Text style={s.buttonTextStyle}>LOGIN</Text>
                </Button>
               
                {/* <Text>Login</Text> */}
        </View>
        // <Text>Login</Text>
    )
}
const s = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:"center",
        // alignSelf:'center'
    },
    field:{
        height:60,
        width:"80%",
        alignSelf:'center',
        backgroundColor:'lightgrey',
        borderRadius:10,
        marginVertical:10
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '87%',
        borderRadius: 5,
        backgroundColor: 'lightgrey',
        alignSelf: "center",
        
      },
      buttonTextStyle: {
      
        textAlign: 'center',
        color: 'white',
        fontSize:17
      },
})
export default Login


// # add pods for desired Firebase products
// # https://firebase.google.com/docs/ios/setup#available-pods