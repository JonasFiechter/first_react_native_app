import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Linking,
  isDarkMode
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.body}>
        <View style={styles.viewM1}>
          <View style={styles.view1}><Text style={styles.text}>1</Text></View>
          <View style={styles.view2}><Text style={styles.text}>2</Text></View>
          <View style={styles.view3}><Text style={styles.text}>3</Text></View>
        </View>
        <View style={styles.viewM2}>
          <View style={styles.view4}><Text style={styles.text}>4</Text></View>
          <View style={styles.view5}><Text style={styles.text}>5</Text></View>
        </View>
        <View style={styles.viewM3}>
          <View style={styles.view6}><Text style={styles.text}>6</Text></View>
          <View style={styles.view7}><Text style={styles.text}>7</Text></View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    padding: 10,
  },
  button: {
    margin: 5,
  },
  viewM1: {
    height: 50, flexDirection: 'row', alignItems: 'stretch'
  },
  viewM2: {
    height: 100, flexDirection: 'column', alignItems: 'stretch'
  },
  viewM3: {
    flex: 1, height: 100, flexDirection: 'row', alignItems: 'stretch'
  },
  view1: {
    backgroundColor: '#355', flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  view2: {
    backgroundColor: '#345', flex: 2, alignItems: 'center', justifyContent: 'center',
  },
  view3: {
    backgroundColor: '#335', flex: 3, alignItems: 'center', justifyContent: 'center',
  },
  view4: {
    backgroundColor: '#225', flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  view5: {
    backgroundColor: '#215', flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  view6: {
    backgroundColor: '#204', flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  view7: {
    backgroundColor: '#103', flex: 1, alignItems: 'center', justifyContent: 'center',
  },
});

export default App;
