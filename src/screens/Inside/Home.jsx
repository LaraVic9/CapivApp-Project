import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <LinearGradient colors={['#001D2A', '#013144', '#001D2A']} style={styles.backgroundColor}> 
    <View style={styles.container}>
      <StatusBar  animated={true} style='light'
       />
         
         <Text style={styles.title}>Home</Text>
      

    </View>
     </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },
  backgroundColor: {
    flex: 1,
    widht: '100%',
  }
});
