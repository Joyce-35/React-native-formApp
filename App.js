import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from 'react-native';
AntDesign

import PetScreen from './petScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerS}>
      <AntDesign name="search1" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search here..."
        placeholderTextColor="#888"
      />
    </View>

      <PetScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
  },
  containerS: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal:30,
    marginVertical:50,
    backgroundColor: "#f0f2f0",
  },
  icon: {
    marginRight: 8,
    color:'#5100ad'
  },
  input: {
    flex: 1,
    color: '#333',
    fontSize: 16,
  },
});
