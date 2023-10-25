import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import FabButton from '../../components/FabButton';

export default function NewCliente() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NewCliente</Text>
      <FabButton style={{ bottom: 150, right: 50,}}/>
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
