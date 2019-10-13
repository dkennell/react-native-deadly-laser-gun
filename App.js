import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/caution.png')}
      />
      <Text>Dangerous laser button!!!!</Text>
      <Image
        style={{width: 200, height: 200}}
        source={require('./assets/laser-button.png')}
      />
      <Text>Dangerous laser button!!!!</Text>
      <Image
        ImageResizeMode="center"
        // style={{width: "80%"}}
        source={require('./assets/caution.png')}
      />
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
});
