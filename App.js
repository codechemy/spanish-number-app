/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native';

const soundList = [
  require("./assets/one.wav"),
  require("./assets/two.wav"),
  require("./assets/three.wav"),
  require("./assets/four.wav"),
  require("./assets/five.wav"),
  require("./assets/six.wav"),
  require("./assets/seven.wav"),
  require("./assets/eight.wav"),
  require("./assets/nine.wav"),
  require("./assets/ten.wav"),
];

const App = () => {

  var Sound = require('react-native-sound');

  const playSound = (sound) => {
    var soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
    }
    );

    setTimeout(() => {
      soundVar.play();
    }, 300);

    soundVar.release();
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require("./assets/logo.png")} style={{ alignSelf: "center", marginTop: 15 }} />
      <View style={styles.gridContainer}>
        {soundList.map((sound) => (
          <TouchableOpacity
            key={sound}
            style={styles.box}
            onPress={() => {
              playSound(sound);
            }}
          >
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "#1b262c",
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  box: {
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginVertical: 6,
    backgroundColor: "#0f4c75",
    borderRadius: 5,

    shadowColor: "#393e46",
    elevation: 5,
  },
  text: {
    fontSize: 50,
    color: "#ff4301",
  },
})
