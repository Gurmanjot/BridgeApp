/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const SwiftModule = NativeModules.SwiftModule;
const Event = new NativeEventEmitter(NativeModules.SwiftModule);

const App: () => React$Node = () => {
  const [sum, setSum] = useState(0);
  const [sub, setSub] = useState(0);

  Event.addListener('subtraction', ({value}) => {
    setSub(value);
  });
  useEffect(() => {
    SwiftModule.subtract(20, 5);
    async function addition() {
      let value = await SwiftModule.add(1, 5);
      setSum(value);
    }
    addition();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <Text>Constants From swift</Text>
        <Text>Name of the APP - {SwiftModule.AppName}</Text>
        <Text>Release Year - {SwiftModule.Release_year}</Text>
        <Text>Sum is - {sum}</Text>
        <Text>Sub is - {sub}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
