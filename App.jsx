import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/routes';
import { View, Text, StatusBar, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';


import Login from './src/screens/outside/Login';
import Welcome from './src/screens/outside/Welcome';
import SignUp from './src/screens/outside/SignUp';


const Stack = createNativeStackNavigator()




export default function App() {


  const user = true 

  if(user){
    return (
      <Routes/>      
    );
  }else {

    return(
      <NavigationContainer >      
        <Stack.Navigator  screenOptions={{headerShown: false}} 
          initialRouteName='Welcome'
        >
          <Stack.Screen name='Welcome' component={Welcome} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    )
    

  }

 
}

