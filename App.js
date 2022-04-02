import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Linking,
  isDarkMode,
  ScrollView,
  RefreshControl,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const [Items, setItems] = useState([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'},
    {key: 9, item: 'Item 9'},
    {key: 10, item: 'Item 10'},
  ])

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <ScrollView  style={styles.body} refreshControl={<RefreshControl/>}>
        {
          Items.map((item) => {
            return (        
            <View style={styles.view1} key={Object.key}>
              <View style={styles.viewI}><Text style={styles.text}>{item.item}</Text></View>
            </View>
            )
          })
        }
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 50,
    margin: 10,
  },
  button: {
    margin: 5,
  },
    viewI: {
    margin: 10,
    backgroundColor: '#253', 
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
