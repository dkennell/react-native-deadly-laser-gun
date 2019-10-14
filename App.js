import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  playSound = async () => {
    await Audio.setIsEnabledAsync(true);
    const sound = new Audio.Sound();
    await sound.loadAsync(require('./assets/sounds/pew-pew.mp3'));
    await sound.playAsync();
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/caution.png')}
      />
      <Text>Dangerous laser button!!!!</Text>
      <TouchableOpacity onPress={playSound}>
        <Image
          style={{width: 200, height: 200}}
          source={require('./assets/laser-button.png')}
        />
      </TouchableOpacity>
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
