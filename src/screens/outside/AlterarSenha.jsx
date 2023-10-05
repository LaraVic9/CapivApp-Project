import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Button from '../../components/Button';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';



export default function AlterarSenha({ navigation }) {

  const alert = () => Alert.alert('Um novo código foi enviado', 'Confira o seu Email', [
    {
      text: 'OK', onPress: () => console.log('OK Pressed')
    }
  ])

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../../../assets/background.png')} style={styles.background} >
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
        <Text 
            style={styles.title}>
                CapiApp
        </Text>
        <ImageBackground source={require('./../../../assets/rectangle.png')} style={styles.rectangle}>
          <TouchableOpacity >
            <Text style={styles.subTitle}>
                Um codigo foi enviado ao seu email, confira e insira o codigo a baixo
            </Text>
          </TouchableOpacity>
          <View style={styles.inputContainer}>
          <TextInput 
              style={styles.input} 
              placeholder='Código'  
              placeholderTextColor='#FFF'    
          />
          </View>
          <Text style={styles.text} onPress={alert} >Reenviar código</Text>
          <Button
              title='Confirmar'      
              style={styles.button}
              onPress={() => navigation.navigate("novaSenha")}
          />
      
        </ImageBackground>
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
      background: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      rectangle: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
      },
      icon: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginHorizontal: '5%',
        marginTop: 30,
      },
      Image: {
        width: 250,
        height: 250,
      },
      title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 40,
       marginTop: -90,
      },
      subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 30,
        textAlign: 'center',
        paddingHorizontal: 20,
      },
      text: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold',
        marginTop: -15,
      },
      inputContainer:{
        width: '80%',
        marginTop: 30,
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
      esqueceuSenha: {
        color: 'white',
        fontSize: 14,
        marginTop: -15,
        marginBottom: 20,
        paddingStart: 20,
      },
      button:{
        width: '80%',
        marginBottom: 14,
        marginTop: 30,
      },
      Signup: {
        color: 'white',
      },
      
    });
    