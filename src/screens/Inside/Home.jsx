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
import Searchbarr from '../../components/SearchBar/SearchBar';

export default function Home() {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const name = 'Lara'
  return (
    <LinearGradient colors={['#08354a', '#10456e', '#08354a']} style={styles.backgroundColor}> 
    <View style={styles.container}>
      <StatusBar  animated={true} style='light'
       />
         
         <Text style={styles.title}>Olá, {name}!</Text>
         <Searchbar
            placeholder="Pesquisar"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
        <Searchbarr/>
    </View>
     </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    justifyContent: "center",
  },
  title: {
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
});
