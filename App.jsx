import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/routes';
import { View, Text, StatusBar, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';

import { Login, Welcome, SignUp, AlterarSenha, NovaSenha } from './src/screens/outside';
import { Prioridade } from './src/screens/Inside';

import { auth } from './src/config/firebase';
import useAuth from './src/hooks/useAuth';

const Stack = createNativeStackNavigator()

export default function App() {

  const {user} = useAuth();
  //const user = false 

  if(user){
    return (
      <Routes/>      
    );
  }else {

    return(
      <NavigationContainer >      
        <Stack.Navigator  screenOptions={{headerShown: false}} 
          initialRouteName='welcome'
        >
          <Stack.Screen name='welcome' component={Welcome} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='signUp' component={SignUp} />
          <Stack.Screen name='alterar' component={AlterarSenha} />
          <Stack.Screen name='novaSenha' component={NovaSenha} />
        </Stack.Navigator>
      </NavigationContainer>
    )
    

  }

 
}

