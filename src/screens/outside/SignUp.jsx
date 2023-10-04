import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../config/firebase';


export default function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigation();
   
   

 const handleSubmit = async () => {
   if (email && password) {
     try {
       await createUserWithEmailAndPassword(auth, email, password);
     } catch (err) {
       console.log('got error: ', err.message);
     }
   }else {
     console.log('ops');
   }
 }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../../../assets/background.png')} style={styles.background}>
      <AntDesign 
          style={styles.icon}
          name="leftcircle" 
          size={30} 
          color="white"
          onPress={() => navigation.navigate("Welcome")}
       />
      <Image 
          source={require('../../../assets/capibara.png')} 
          style={styles.Image}
      />   
      <Text style={styles.title}>CapivApp</Text>

      <Text style={styles.subTitle}>Criar conta</Text>
      <View style={styles.inputContainer}>
      <TextInput 
          style={styles.input} 
          textContentType='emailAddress' 
          placeholder='Email'  
          placeholderTextColor='#FFF'
          value={email}
          onChangeText={value => setEmail(value)} 
      />
       <TextInput 
          style={styles.input} 
          textContentType='password' 
          placeholder='Senha'  
          placeholderTextColor='#FFF' 
          secureTextEntry={true}
          value={password} 
          onChangeText={value => setPassword(value)}
       />
      <TextInput 
          style={styles.input}
          textContentType='password'
          placeholder='Confirmas Senha'  
          placeholderTextColor='#FFF' 
          secureTextEntry
        />
      </View>
      <Button
        title='Registrar-se'      
        style={styles.button}
        onPress={handleSubmit}
      />
        <TouchableOpacity style={styles.textContent} onPress={() => navigation.navigate("Login")}> 
          <Text style={styles.text}>Ja tem uma conta?</Text>
          <Text style={styles.entrar}>Entrar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    paddingHorizontal: 3,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: -20,
    marginHorizontal: '5%',
    marginVertical: '7%'
  },
  Image: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    marginTop: -90
  
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  inputContainer:{
    width: '80%'
  },
  input:{
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart: 24,
    color: 'white',
    marginBottom: 20,
  },
  button:{
    width: '80%',
    marginBottom: 14,
  },
  Signup: {
    color: 'white',
  },
  background: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    flexDirection: 'row',
    marginTop: 10,
    
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginTop: -15,
    marginBottom: 20,
    paddingEnd: 5,
  },
  entrar: {
    color: 'white',
    fontSize: 14,
    marginTop: -15,
    marginBottom: 20,
    paddingEnd: 5,
    fontWeight: 'bold',
  },
});
