import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import FabButton from '../../components/TabButton';

export default function New() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New</Text>
      <FabButton style={{ bottom: 150, right: 60 }}/>
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
