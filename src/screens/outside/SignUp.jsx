import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Button from '../../components/Button';

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../../../assets/background.png')} style={styles.background}>
      <AntDesign style={styles.icon} name="leftcircle" size={30} color="white" onPress={() => navigation.navigate("Welcome")}/>

      <Text style={styles.title}>Criar conta</Text>
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} textContentType='name' placeholder='Nome'  placeholderTextColor='#FFF'/>
      <TextInput style={styles.input} textContentType='emailAddress' placeholder='Email'  placeholderTextColor='#FFF'/>
      <TextInput style={styles.input}  placeholder='CPF'  placeholderTextColor='#FFF'/>
      <TextInput style={styles.input}  placeholder='CNPJ'  placeholderTextColor='#FFF'/>
      <TextInput style={styles.input} textContentType='password' placeholder='Senha'  placeholderTextColor='#FFF' secureTextEntry/>
      <TextInput style={styles.input} textContentType='password' placeholder='Confirmas Senha'  placeholderTextColor='#FFF' secureTextEntry/>
      </View>
      <Button
        title='Registrar-se'
       
        style={styles.button}
      />
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

    marginTop: 50,
    marginHorizontal: '5%',
    
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
  esqueceuSenha: {
    color: 'white',
    fontSize: 14,
    marginTop: -15,
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
});
