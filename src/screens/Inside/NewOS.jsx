import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import FabButton from '../../components/FabButton';
import { doc, setDoc, collection, addDoc, updateDoc, deleteDoc, query, where, getDocs, Timestamp, orderBy, onSnapshot } from "firebase/firestore";
import firebase, { db } from '../../config/firebase';
import { useState, useEffect } from 'react';

export default function NewOS() {

  const [username, setName] = useState('')
  const [email, setEmail] = useState('')
  const [users, setUsers] = useState([])

  //nome da coleção é 'teste'
  const userCollectionRef = collection(db, 'teste')

  const adicionar = () => {
    try {
      //aqui ele ta definindo que vai organizar pelo email
      setDoc(doc(db, 'teste', email), {
        nome: username,
        email: email,
    }).then(() => {
        console.log('enviado');
    }).catch((error) => {
        console.log(error);
    })
    }catch(error) {
      console.log(error.message);
    }
  }

  const update = () => {
    try {
      
      updateDoc(doc(db, 'teste', email), {
        nome: username,
       
    }).then(() => {
        console.log('update realizado');
    }).catch((error) => {
        console.log(error);
    })
    }catch(error) {
      console.log(error.message);
    }
  }

  const deleteUser = () => {
    try {
      deleteDoc(doc(db, 'teste', email), {
        username: username,
        email: email
      }).then(() => {
        console.log('deletado');
      }).catch((error) => {
        console.log(error);
      })
    }catch(error) {
      console.log(error.message);
    }
  }

  //use esse aqui pra criar a parte que ira printar as os, ou os testes, como preferir chamar
  const Testes = () => {
    return (
      <View>
        <View>
          <Text>Oi, estou sendo printado aqui</Text>
        </View>
      </View>
    )
  }
  
  //const testeRef = db.collection('teste')

  //const queryRef = testeRef.where('email', '==', true).get()
  

  const listUser = () => {
      console.log('Set: ');

      
   }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NewOS</Text>
 
      <TextInput placeholder='Nome' onChangeText={value => {setName(value)}}/>
          <TextInput placeholder='Email' onChangeText={value => {setEmail(value)}} />
          
        <Button onPress={adicionar} title='novo'/>
        <Button onPress={update} title='update'/>
        <Button onPress={deleteUser} title='deleteUser'/>
        <Button onPress={listUser} title='List'/>
        
        <Testes/>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  }
});
