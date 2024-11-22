import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
        <View style={styles.containerColl}>
          <View style={styles.container}>
            <View style={styles.row}>
              <Text style={styles.header}>Hi! My name is Demin Nikita ¯\_(ツ)_/¯</Text>
              <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    textColor: 'white',
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
  row: {
    alignItems: 'center',
    width:'46%',
    justifyContent: 'center',
  },
  containerColl: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textColor: 'white',
  },
  header: {
    fontSize: 30,
    color: 'white',
  },
});
