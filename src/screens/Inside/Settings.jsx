import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView , TouchableOpacity} from 'react-native';
import COLORS from '../../constants/color';
import { MaterialIcons } from "@expo/vector-icons";

export default function Config() {
  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: COLORS.white,}}>
    <View style={styles.container}>
      
      <Text style={styles.title}>Configurações</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  }
});
