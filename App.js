import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Table from './components/Table';
import { data } from './components/data';

export default function App() {
  return (
    <View style={styles.container}>
      <Table />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
});
