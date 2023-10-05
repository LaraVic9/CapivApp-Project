import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  Feather,
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign, 
} from '@expo/vector-icons'
import { Searchbar } from 'react-native-paper';
import React, {useState} from 'react'


import Prioridade from './Prioridade';


import ListaHorizontal from '../../components/layout/ListaHorizontal/ListaHorizontal';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({ navigation }) {

  const data = [
    '#FF33FF',
    '#3366E6',
    '#B34D4D',
    '#00B3E6'
  ]

  
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const name = 'Lara'
  return (
    <LinearGradient colors={['#08354a', '#10456e', '#08354a']} style={styles.backgroundColor}> 
    <View style={styles.container}>
      <StatusBar  animated={true} style='light'
       />
         
         <Text style={styles.subTitle}>Olá, {name}!</Text>
         <View style={styles.searchContainer}>
            <Searchbar
              placeholder="Pesquisar"
              onChangeText={onChangeSearch}
              value={searchQuery} 
              style={styles.searchBar}
            />
          </View>
          <ListaHorizontal 
              data={data}
              />
          <Text 
              style={styles.title}>
              Ordens de Serviço Novas
            </Text>
          <TouchableOpacity 
            style={styles.buttonText}
            onPress={() => navigation.navigate("prioridade")}
            >
              <Text style={styles.title} >
              OS Prioridade Alta</Text>
            
            <AntDesign 
              name="right" 
              size={24} 
              color="white" 
              style={styles.icon} 
            />
          </TouchableOpacity>
    </View>
     </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    
    justifyContent: "center",
    width: '100%'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    padding: 5,
    paddingStart: 20,
    paddingVertical: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 5,
    paddingStart: 20,
  },
  backgroundColor: {
    flex: 1,
    widht: '100%',
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 40,
    color: 'white',
    height: 47,
    width: '94%', 
    paddingStart: 20,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    width: '90%'
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    flexDirection: 'row'
  },  
  icon:{
    padding: 5,
    paddingVertical: 25,
    paddingStart: 100,
  },
});
