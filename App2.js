// React Native Full Screen Background Image
// https://aboutreact.com/react-native-full-screen-background-image/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
                    source={require('./images/congruent_outline.png')}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="repeat"
                />
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            Example of React Native Swipe Button
          </Text>
          <View style={styles.centerContentStyle}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
              }}
              style={{ width: 40, height: 40, marginTop: 90 }}
            />
            <Text style={styles.TextStyle}>https://aboutreact.com</Text>
          </View>
        </View>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 0,
  },
  centerContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});