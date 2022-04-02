import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Linking,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const [name, setName] = useState('Mash')

  const [session, setSession] = useState({number: 0, title: 'State: '})

  const isDarkMode = useColorScheme() === 'dark';

  function onClickHandler() {
    setName('This is the Mash app')
  }

  function onClickHandler2() {
    setName('Mash')
  }

  function onClickHandler3() {
    setSession({number: session.number + 1, title: 'Changed'})
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{session.title} {session.number}</Text>
      <Text style={styles.text}>{name}</Text>
      <Button onPress={onClickHandler} style={styles.button} title='Change app name'></Button>
      <Button onPress={onClickHandler2} style={styles.button} title='Change app name back'></Button>
      <Button onPress={onClickHandler3} style={styles.button} title='Update session'></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    padding: 10,
  },
  button: {
    color: '#363',
    margin: 5,
  },
});

export default App;
